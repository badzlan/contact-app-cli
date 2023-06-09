<p align="center"><a href="https://nodejs.org/" target="_blank"><img src="https://github.com/badzlan/contact-app-cli/blob/main/nodejs.png" width="400" alt="JavaScript Logo"></a></p>

## Project Overview
Contact App CLI (Command Line Interface) using NodeJs

Technology :
- [NodeJs](https://nodejs.org/).

## Prerequisite
- Already install [nodejs](https://nodejs.org/).
- Already install [npm](https://www.npmjs.com/).

## Step by step installation
#### 1. Clone this repository
```
git clone https://github.com/badzlan/contact-app-cli.git
```
or 
#### Download the zip file
![download zip](https://github.com/0x1m4o/Industry-Project/blob/main/public/img/image.png)

#### 2. Go to directory 
```
cd contact-app-cli
```

#### 3. Install dependency with npm
```
npm install
```

#### 4. Run the <i>index.js</i> file
```
node index.js <command> <option>
```

## Command Usage
| Commands | Description                 | Options                                                                                                    |
| :------- | :-------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `add`    | Add a new contact           | **--nama**. [required] [string] <br> **--noHP**. [required] [string] <br> **--email**. [required] [string] |
| `list`   | Show all contact list       | **No need options**                                                                                        |
| `detail` | Show contact detail by name | **--nama**. [required] [string]                                                                            |
| `delete` | Delete contact by name      | **--nama**. [required] [string]                                                                            |

## Authors
- [@badzlan](https://github.com/badzlan)
