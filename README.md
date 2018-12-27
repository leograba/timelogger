# JSON HTTP Request Time Logger

This project is a means to send a JSON string as the header of an HTTP
request. It has both a CLI as well as a GUI:

- CLI: written in Node.js, can be run standalone or used as a module.
- GUI: written in Qt5 (c++ and QML), design is thought for desktop.

## Rationale

The project was created to be a very simple tool, without options, menus,
or anything that drives it away from its main task: to log tasks in
which you are currently working on, consisting of the current timestamp,
the task description and the task code.

The only configuration required is the URI to which the HTTP request must
be sent. The initial purpose of the project was to log hours using
Microsoft Flow as the glue to append data to an online time sheet,
therefore mentions or references may be present in the source-code.
