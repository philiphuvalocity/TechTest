# TechTest

Valocity Tech Test

## 1. Guide

To finish the tech test, you can choose the tools or frameworks you want, or using the existing framework (WDIO)
This tech tests will take no more than 2 hrs to finish.

### Key Output

1. pls try to use PMO
2. pls make the sturcture with clean code practice
3. pls add the instrudtion if you are going to use any other tools or frameworks for this tech tests

## 2. Preparation
If you are going to use the existing framework, please check the blow steps, otherwise pls go to the Test Cases No.1 directly
1. install nodejs LTS (https://nodejs.org/en/)
2. clone the repo
3. using the bash terminal to run `npm ci` to install the dependencies
4. to run the sample test pls using the command `npm run e2e` from bash terminal

if you have problems on the driver version pls check the line 7 from wdio.conf.js file
if you have problems on headless mode, pls check the line 74 from wdio.conf.js file

sample test is in tests/login/login.e2e.ts
env password is in .env file

## Test Case No. 1 (E2E UI)

#### Test on listing an item as general item:

1. Goto the list general item page (/Sell/Category.aspx?group=GENERAL&rptpath=1-&fromLink=general)
2. Fill the Listing Title and choose from the category -> any category is fine
3. Choose the 'List in only one category' radio button, then click Next button
4. On the next page, fill the Description -> any description is fine, then click Next button
5. On the next page, fill the Start Price, then click the Next button
6. On the next page, keep the no pick-ups and choose the 'I don't know the shipping costs yet', then choose the Cash, then click Next button
7. Use the Continue wihout a photo
8. Choose any of the package, then click Next Button
9. Click Start My Auction button
10. Verify the 'Your auction has started.' is on the page

## Once you finished the tech test
1. Pls create a PR and send email back to Nancy
2. Pls dont merge your PR
