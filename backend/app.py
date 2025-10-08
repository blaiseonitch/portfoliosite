from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route("/api/projects")
def projects():
    return jsonify([
        {"title": "Solar Tracker", "desc": "Python + Arduino system"},
        {"title": "C Game Engine", "desc": "Built with raylib and CMake"}
    ])

if __name__ == "__main__":
    app.run(debug=True)
