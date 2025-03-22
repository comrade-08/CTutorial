#include <iostream>
#include <conio.h>
using namespace std;
#define MAX 100

// stack
class stack
{
private:
    int top;
    int new_stack[MAX];
public:
    stack();
    void push(int item);
    void pop();
    int isFull();
    int isEmpty();
    void display();
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

void stack::pop() {
   if (top < 0)
   {
        cout << "Stack Underflow . . !\n";
   } else {
        int item = new_stack[top--];
        cout << item << "popped";
   }
}

void stack::push(int item){
    if (top >= (MAX - 1))
    {
        cout << "Stack Overflow . . !";
    } else {
        new_stack[++top] = item;
        cout << item << " inserted" << endl;
    }
}

void stack::display(){
    for (int i = 0; i <= top; i++)
    {
        cout << "new_stack[" << i << "] = " << new_stack[i] << endl; 
    }
}

// queue

class queue
{
private:
    /* data */
public:
    queue(/* args */);
    ~queue();
};

queue::queue(/* args */)
{
}

queue::~queue()
{
}



int main(){
    stack s;
    s.push(23);
    s.push(89);
    s.push(123);
    s.pop();
    s.display();
    return 0;
}