#include <iostream>
#include <conio.h>
using namespace std;
#define MAX 5

class stack
{
private:
    int top;
    int stack_arr[MAX];

public:
    stack();
    void push(int item);
    void pop();
    int isEmpty();
    int isFull();
    void display();
};

stack::stack() { top = -1; }

int stack::isEmpty() { return (top < 0); }
int stack::isFull() { return (top >= (MAX - 1)); }

void stack::push(int item)
{
    if (isFull())
        cout << "Stack is Overflow!\n";
    else
    {
        stack_arr[++top] = item;
        cout << item << " pushed!\n";
    }
}

void stack::pop()
{
    if (isEmpty())
        cout << "Stack is Underflow!\n";
    else
        cout << stack_arr[top--] << " popped!\n";
}

void stack::display()
{
    if (isEmpty())
        cout << "Stack is Empty!";
    else
    {
        for (int i = 0; i <= top; i++)
            cout << stack_arr[i] << "\t";
        cout << endl;
    }
}

int main()
{
    stack s;
    cout << "is Empty : " << (bool)s.isEmpty() << endl;
    s.push(56);
    s.push(93);
    s.push(12);
    s.push(78);
    s.push(78);
    s.push(78);
    s.display();
    s.pop();
    s.pop();
    s.pop();
    s.pop();
    s.pop();
    s.pop();
    s.display();
    return 0;
}