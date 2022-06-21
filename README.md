## 1. Guide

To finish the tech test, you can choose the tools or frameworks you want, or using the existing framework (WDIO). This tech tests will take no more than 2 hours to complete.

Testing url: https://www.tmsandbox.co.nz/

User: Auto.Val@valtest.co.nz

PWD: Valocity123

### Key Output

1. Please try to use PMO
2. Please make the structure with a clean code practice
3. Please add instructions if you are going to use any other tools or frameworks for this tech test

## 2. Preparation
If you are going to use the existing framework, please check the below steps, otherwise please go to the Test Cases No.1 directly 

1. Install nodejs LTS (https://nodejs.org/en/) 
2. Clone the repo 
3. Use the bash terminal to run npm ci to install the dependencies 
4. To run the sample test use the command npm run e2e from bash terminal 

If you have problems on the driver version, please check line 7 from wdio.conf.js file. 
If you have problems on headless mode, pls check line 74 from wdio.conf.js file. 

sample test is in tests/login/login.e2e.ts
Create a file called src/automation-tests/e2e/.env adding the parameter SandboxPassword with the password.

## Test Case No. 1 (E2E UI)

#### Test on listing an item as general item:

Test on listing an item as general item: 


1. Go to the “List General Item” page (/Sell/Category.aspx?group=GENERAL&rptpath=1-&fromLink=general) 
2. Fill in the Listing Title and choose from the Category -> (any category is fine) 
3. Choose the 'List in only one category' radio button, then click the Next button 
4. On the next page, fill the Description -> (any description is fine), then click the Next button 
5. On the next page, fill in the Start Price, then click the Next button 
6. On the next page, keep the “no pick-ups” and choose the 'I don't know the shipping costs yet', then choose “Cash”, and then click the Next button 
7. Use the “Continue without a photo” 
8. Choose any of the packages, then click Next Button 
9. Click “Start My Auction” button 
10. Verify that the screen displays text 'Your auction has started.' on the page


## Once you finished the tech test

1. Please create a PR and send email back to Nancy.Carter@ValocityGlobal.com
2. Please do NOT merge your PR
