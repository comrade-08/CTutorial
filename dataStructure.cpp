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

#include <queue>  // Required for the queue container

int queueFunc() {
    // Declare a queue of integers
    queue<int> q;

    // Enqueue elements (add elements to the queue)
    q.push(10);
    q.push(20);
    q.push(30);
    q.push(40);

    // Display the front element of the queue
    cout << "Front of the queue: " << q.front() << endl;

    // Display the size of the queue
    cout << "Size of the queue: " << q.size() << endl;

    // Dequeue elements (remove elements from the queue)
    cout << "Dequeuing: " << q.front() << endl;
    q.pop();  // Removes 10

    cout << "Front of the queue after one pop: " << q.front() << endl;

    // Check if the queue is empty
    if (q.empty()) {
        cout << "Queue is empty." << endl;
    } else {
        cout << "Queue is not empty." << endl;
    }

    // Output the size of the queue after some dequeue operations
    cout << "Size of the queue after popping one element: " << q.size() << endl;

    return 0;
}




int main(){
    stack s;
    s.push(23);
    s.push(89);
    s.push(123);
    s.pop();
    s.display();
    delete &s;
    return 0;
}