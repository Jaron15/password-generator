# Password Generator Starter Code
On this project, I created a password generator using JavaScript to create a function that uses user input to choose what is included in the password. Once the user hits the "Genereate Password" button they are prompted to answer a series of questions about how long and what kind of characters will be included. The password is randomly generated through a loop then diplayed into the text area for the user.

## Features 
 When the application is opened it should look like the following image
 ![image](https://user-images.githubusercontent.com/87290877/129501397-23551aaf-87c9-4273-97bc-000a06200e7b.png)

When the user hits the Generate Password button, a series of prompts and confirms are presented to ask details about the password. 

![image](https://user-images.githubusercontent.com/87290877/129501705-692673c2-1685-4da1-877a-eb790caa6fef.png)

Once the user enters in their preferences I used a series of if statements to create a charSet that would be referenced in the loop that creates the randomly generated password.

![image](https://user-images.githubusercontent.com/87290877/129501831-376c6cce-2216-4262-a6fe-f38d4946f749.png)

A loop is then ran to pull characters from the created charSet based on the user input, at random, and it is returned as the password value which is then displayed in the text area.

![image](https://user-images.githubusercontent.com/87290877/129501975-ac73d471-8b57-4175-85c2-64e9fc5578c4.png)

I also created if statements that make sure that the user chooses a password length of 8-128 and has at least one characer type selected. If this is not the case, the user will be alerted why their password is not generated and the value that is returned to the text area is "Your Secure Password" (to match the placholder text).


