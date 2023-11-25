JSON Hierarchy Viewer
Overview
Welcome to the JSON Hierarchy Viewer – an open-source tool designed to receive JSON input and generate a hierarchical representation of its structure. This viewer transforms JSON objects into a structured format, making it easier to understand the hierarchy of the data.

How It Works
The viewer takes a JSON input, such as {"name": "Daniel"}, and produces an output in the following format:

json
Copy code
[
  {
    "id": "name",
    "parent": null,
    "value": "Daniel"
  }
]
In this output, each element represents a node in the hierarchy. The properties include:

id: The key or property name in the JSON object.
parent: The parent node in the hierarchy. For the root node, this is null.
value: The value associated with the key in the JSON object.
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js
npm (Node Package Manager)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/json-hierarchy-viewer.git
Navigate to the project directory:

bash
Copy code
cd json-hierarchy-viewer
Install dependencies:

bash
Copy code
npm install
Usage
Provide your JSON input in the input.json file.

json
Copy code
{"name": "Daniel"}
Run the viewer:

bash
Copy code
npm start
View the generated hierarchy in the output.json file:

json
Copy code
[
  {
    "id": "name",
    "parent": null,
    "value": "Daniel"
  }
]
Contributions
Contributions are welcome! If you'd like to enhance the viewer or fix issues, please follow these steps:

Fork the repository.
Create a new branch.
Make your changes and commit them.
Push to your fork and submit a pull request.
Feedback
Feel free to open an issue for any feedback, questions, or improvements you'd like to suggest.

Happy coding! 🚀
