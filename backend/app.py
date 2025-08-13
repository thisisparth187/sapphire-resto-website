from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

username = "admin"
password = "admin"

# Store messages here
messages = []

@app.route("/contact", methods=["POST"])
def contact():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"success": False, "message": "All fields are required"}), 400

    messages.append({
        "name": name,
        "email": email,
        "message": message
    })
    return jsonify({"success": True, "message": "Message received"})

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    if data["username"] == username and data["password"] == password:
        return jsonify({
            "success": True,
            "message": "Login successful",
            "messages": messages  # send all stored messages to frontend
        })
    else:
        return jsonify({"success": False, "message": "Invalid credentials"})

if __name__ == "__main__":
    app.run(debug=True)
