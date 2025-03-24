// #include <iostream>
// using namespace std;

// #define MAX 5

// class Queue
// {
// private:
//     int *queue_arr;  // Pointer to array to store queue elements
//     int capacity;    // Maximum number of elements the queue can hold
//     int front;       // Index of the front element in the queue
//     int back;        // Index of the last element in the queue
//     int count;       // Current size of the queue (number of elements)

// public:
//     Queue(int size = MAX);  // Constructor with default size
//     void enqueue(int item); // Adds an element to the queue
//     void dequeue();         // Removes an element from the queue
//     void display();         // Displays the elements of the queue
//     int isFull();           // Returns true if the queue is full
//     int isEmpty();          // Returns true if the queue is empty
//     int size();             // Returns the number of elements in the queue
// };

// // Constructor: Initializes the queue with a given size (or default MAX)
// Queue::Queue(int size)
// {
//     queue_arr = new int[size];  // Dynamically allocated array for queue elements
//     capacity = size;            // Set the maximum capacity
//     front = 0;                  // Initially, front is at the beginning of the array
//     back = -1;                  // Initially, the back is at -1 (queue is empty)
//     count = 0;                  // Initially, the queue is empty
// }

// // Checks if the queue is empty (no elements)
// int Queue::isEmpty() { return (count == 0); }

// // Checks if the queue is full (reached the maximum capacity)
// int Queue::isFull() { return (count == capacity); }

// // Returns the current size (number of elements) in the queue
// int Queue::size() { return count; }

// // Enqueue: Adds an element to the queue
// void Queue::enqueue(int item)
// {
//     if (isFull())  // If the queue is full, display overflow message
//         cout << "Queue overflow!\n";
//     else
//     {
//         // Update the 'back' index using modulo for circular behavior
//         back = (back + 1) % capacity; 

//         queue_arr[back] = item;  // Place the item at the 'back' index
//         cout << item << " enqueued!" << endl;
//         count++;  // Increment the size of the queue
//     }
// }

// // Dequeue: Removes an element from the front of the queue
// void Queue::dequeue()
// {
//     if (isEmpty())  // If the queue is empty, display underflow message
//         cout << "Queue underflow!\n";
//     else
//     {
//         cout << queue_arr[front] << " dequeued!" << endl;
//         front = (front + 1) % capacity;  // Update the 'front' index for circular behavior
//         count--;  // Decrement the size of the queue
//     }
// }

// // Display: Displays the elements in the queue
// void Queue::display()
// {
//     if (isEmpty())
//     {
//         cout << "Queue is empty!" << endl;
//     }
//     else
//     {
//         int i = front;
//         cout << "Queue elements: ";
//         for (int j = 0; j < count; j++)  // Iterate over the number of elements in the queue
//         {
//             cout << queue_arr[i] << "\t";  // Print the element at index 'i'
//             i = (i + 1) % capacity;  // Circular increment of 'i'
//         }
//         cout << endl;
//     }
// }

// int main()
// {
//     Queue q;  // Create a queue with default size (MAX)

//     q.enqueue(1);  // Enqueue some elements
//     q.enqueue(2);
//     q.enqueue(3);

//     q.display();  // Display the queue elements

//     q.dequeue();  // Dequeue some elements
//     q.dequeue();

//     q.display();  // Display the queue after dequeue operations

//     return 0;
// }

#include <iostream>
using namespace std;

#define MAX 5

class queue
{
private:
    int *queue_arr;
    int count;
    int capacity;
    int front;
    int back;
public:
    queue(int size = MAX);
    void enqueue(int item);
    void dequeue();
    int isEmpty();
    int isFull();
    int size();
    void display();
    ~queue();
};

queue::queue(int size)
{
    queue_arr = new int[size];
    count = 0;
    front = 0;
    back = -1;
    capacity = size;
}

int queue::size(){return count;}
int queue::isEmpty(){return (size() == 0);}
int queue::isFull(){return (size() >= capacity);}

void queue::enqueue(int item){
    if (isFull()) cout << "Queue overflow!";
    else {
        back = ((back + 1) % capacity);
        queue_arr[back] = item;
        cout << queue_arr[back] << " enqueued!" << endl;
        count++;
    }
}

void queue::dequeue(){
    if (isEmpty()) cout << "Queue underflow!";
    else {
        cout << queue_arr[front] << " dequeued!" << endl;
        front = ((front + 1) % capacity);
        count--;
    }
    
}

void queue::display(){
    int i = front;
    for (int j = 0; j < count; j++)
    {
        cout << queue_arr[i] << "\t";
        i = ((i + 1) % capacity);
    }
    cout << endl;
}

queue::~queue()
{
    delete[] queue_arr;
}

int main() {
    queue q;
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.display();
    q.dequeue();
    q.dequeue();
    q.display();
    return 0;
}

