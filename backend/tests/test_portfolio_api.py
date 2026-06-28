"""Backend API tests for portfolio site - status, contact endpoints."""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://portfolio-showcase-2828.preview.emergentagent.com").rstrip("/")
# Fallback to public URL from frontend/.env if env var not set in shell
if not BASE_URL or BASE_URL == "None":
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL"):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---- Health ----
def test_root(api_client):
    r = api_client.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert r.json().get("message") == "Hello World"


# ---- Contact endpoint ----
class TestContact:
    def test_create_contact_and_persist(self, api_client):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"{unique} Tester",
            "email": f"{unique.lower()}@example.com",
            "subject": "Hello from pytest",
            "message": "This is an automated test message.",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["subject"] == payload["subject"]
        assert data["message"] == payload["message"]
        assert "id" in data and isinstance(data["id"], str)
        assert "created_at" in data

        # Verify persistence via GET list
        g = api_client.get(f"{BASE_URL}/api/contact")
        assert g.status_code == 200
        items = g.json()
        assert isinstance(items, list)
        found = [it for it in items if it.get("email") == payload["email"]]
        assert len(found) >= 1, "Submitted contact not found in GET list"
        assert found[0]["message"] == payload["message"]

    def test_invalid_email_rejected(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/contact", json={
            "name": "Bad", "email": "not-an-email", "message": "hi"
        })
        assert r.status_code == 422

    def test_missing_required_fields(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/contact", json={"email": "x@y.com"})
        assert r.status_code == 422

    def test_empty_message_rejected(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/contact", json={
            "name": "X", "email": "x@y.com", "message": ""
        })
        assert r.status_code == 422

    def test_no_mongo_objectid_in_response(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        for item in r.json():
            assert "_id" not in item


# ---- Status (legacy) ----
class TestStatus:
    def test_create_status(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/status", json={"client_name": "TEST_pytest"})
        assert r.status_code == 200
        data = r.json()
        assert data["client_name"] == "TEST_pytest"
        assert "id" in data

    def test_list_status(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/status")
        assert r.status_code == 200
        assert isinstance(r.json(), list)
