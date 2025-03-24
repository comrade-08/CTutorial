#include <iostream>
#include <conio.h>
using namespace std;
#define MAX 5

class queue
{
private:
    int *queue_arr;
    int capacity;
    int front;
    int back;
    int count;

public:
    queue(int size = MAX);
    void enqueue(int item);
    void display();
    int isFull();
    int isEmpty();
    int size();
};

int queue::isEmpty() { return (count == 0); }
int queue::isFull() { return (count == capacity); }
int queue::size() { return count; }

queue::queue(int size)
{
    queue_arr = new int[size];
    capacity = size;
    front = 0;
    back = -1;
    count = 0;
}

void queue::enqueue(int item)
{
    if (count == capacity)
    {
        cout << "Queue overflow!\n";
    }
    else
    {
        back = ((back + 1) % capacity);
        queue_arr[back] = item;
        cout << back << "\t" << queue_arr[back] << endl;
        count++;
    }
}

void queue::display()
{
    for (int i = 0; i < count; i++)
    {
        cout << queue_arr[i] << "\t";
    }
    cout << endl;
}

int main()
{
    queue q;
    q.enqueue(01);
    q.enqueue(02);
    q.enqueue(03);
    q.enqueue(04);
    q.enqueue(05);
    q.enqueue(06);
    q.display();
    return 0;
}