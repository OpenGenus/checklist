# Code structure of OpenGenus Checklist


```
OpenGenus/checklist/
│
├── docs/
│   ├── CODE-STRUCTURE.md
│   └── ... (Other documentation files)
│
├── src/
│   ├── checklist-style.css
│   ├── checklist-track.js
│   ├── data-science-checklist.html
│   └── ... (Other HTML checklist files)
│
├── deploy/
│   ├── deploy.py
│   ├── production-checklist/
│   │   ├── data-science-checklist.hbs
│   │   └── ... (Other .hbs checklist files)
│   ├── markdown.py
│   └── list/
│       ├── data-science-checklist.md
│       └── ... (Other .md checklist files)
│
├── .gitignore
├── README.md
└── ... (Other project files)

```

This directory structure is organized as follows:

1. **docs/**: This directory contains documentation files, including "CODE-STRUCTURE.md," which provides information about the code structure of the project.
2. **src/**: This directory contains the source code and HTML checklist files for the project. It includes "checklist-style.css," "checklist-track.js," and various HTML checklist files.
3. **deploy/**: This directory holds deployment-related scripts and files.
   * "**deploy.py**" is a script for deployment purposes.
   * "**production-checklist/**" contains generated .hbs checklist files for production.
   * "**markdown.py**" is a script for generating Markdown checklist files.
   * "**list/**" contains generated .md checklist files.
4. **.gitignore**: This file specifies which files and directories should be ignored by Git.
5. **README.md**: This is the project's main documentation file.

The directory structure reflects the organization of the OpenGenus Checklist repository, including source code, generated checklist files, documentation and deployment scripts.
