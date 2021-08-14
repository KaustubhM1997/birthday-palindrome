# Palindrome Birthday!
This fun app created using Vanilla JS in Visual Studio Code tells the user whether their birthday is Palindrome or not.

### What is Palindrome?
A palindrome is basically a word, phrase, or a number that reads the same backwards as forwards.

## How does the App work?

The user needs to do two things, namely:

1. Enter their birth date in the date field
2. Then click on the Check button

As soon as the user does this, the App would display a message showing whether their birtday is palindrome or not. If the user's birthday is not palindrome then it also shows the nearest palindrome date and by how many days did the user miss it.

### How does the App decide that?

The app checks the user's input birth date in 4 formats: yyyy-mm-dd, dd-mm-yyyy, mm-dd-yy, m-dd-yyyy and then determines where the date is palindrome or not. For example, if the input date is 2nd February, 2021 then the app will check for 20210202, 02022021, 020221, 2022021 combinations. If any one of these combinations is a palindrome, it would display the same. If not, it would display the nearest palindrome date and the number of days by which the user missed it.

## Privacy Notice:
We do not store your personal data and information.
