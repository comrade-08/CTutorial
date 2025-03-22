#include <iostream>
#include <conio.h>
using namespace std;
#define MAX 100

class stack
{
private:
    int top;
public:
    stack();
    int push(int);
    int pop();
    int isFull();
    int isEmpty();
};

stack::stack()
{
    top = -1;
}

int stack::isEmpty(){
    return (top < 0);
}

int stack::isFull(){
    return (top >= MAX);
}

int stack::pop() {
   if (!stack::isEmpty())
   {
        cout << "Stack Underflow . . !\n";
        return 0;
   } else {
        cout << top--;
        return 1;
   }
}


int main(){
    return 0;
}