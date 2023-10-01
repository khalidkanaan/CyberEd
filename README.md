# CyberEd_4907
Educative Webapp for Teaching Basic Concepts of Cybersecurity

## Set Up Virtual Environment

### For MAC OS/Linux:
- Install pip3
    ```sh
    sudo apt-get install python3-pip
    ```
- Install virtualenv
    ```sh
    pip3 install virtualenv
    ```
- Change Directory
    ```sh
    cd <project-path>/CyberEd_4907/
    ```
- Create Virtual Env
    ```sh
    virtualenv -p python3 venv
    ```
- Activate Virtual Env
    ```sh
    source venv/bin/activate
    ```
- Install Project Requirements
    ```sh
    pip3 install -r requirements.txt
    ```
- Add node.js Virtual Env to Existing venv
    ```sh
    nodeenv -p
    ```
- Update to Latest npm Version
    ```sh
    npm install -g npm
    ```
- Install react Dependencies
    ```sh
    npm install
    ```
- Deactivating Virtual Env
    ```sh
    deactivate
    ```

### For Windows 10/11:
- Download & Install Python 3.11.5
    - Click [this link](https://www.python.org/ftp/python/3.11.5/python-3.11.5-amd64.exe) to download Python 3.10.7 executable, the default installation should install pip on your Windows machine as well.
    -  Add Python & pip to the PATH variable
        1. Open the Run dialog box by pressing the Windows key + R.
        2. Type in sysdm.cpl and press Enter to access System Properties.
        3. Under the the Advanced tab click Environment Variables
        4. Under User variables select Path and click Edit.
        5. Click New and the following paths seperately:
            ```sh
            C:\Users\{YOUR_USER}\AppData\Local\Programs\Python\Python311
            C:\Users\{YOUR_USER}\AppData\Local\Programs\Python\Python311\Scripts
            ```
        6. Under System variables select Path and click Edit
        7. Click New and the following path:
            ```sh
            C:\Users\{YOUR_USER}\AppData\Local\Programs\Python\Python311
            ```

- Install virtualenv
    ```sh
    pip install virtualenv
    ```
- Change Directory
    ```sh
    cd <project-path>/CyberEd_4907/
    ```
- Create Virtual Env
    ```sh
    virtualenv -p python3 venv
    ```
- Activate Virtual Env
    ```sh
    source venv/Scripts/activate
    ```
- Install Project Requirements
    ```sh
    pip install -r requirements.txt
    ```
- Add node.js Virtual Env to Existing venv
    ```sh
    nodeenv -p
    ```
- Update to Latest npm Version
    ```sh
    npm install -g npm
    ```
- Install Node Dependencies in package.json. Run this command for the Backend and Frontend
    ```sh
    npm install
    ```
- Deactivating Virtual Env
    ```sh
    deactivate
    ```
