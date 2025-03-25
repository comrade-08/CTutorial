#include <iostream>

using namespace std;

struct Node
{
    int num;
    Node* next;
};

Node* head = NULL;
int count = 0;

void insert(int item){
    Node* newNode = new Node;
    newNode->num = item;
    newNode->next =head;
    head = newNode;
    count++;
    cout << head->num << " is inserted!" << endl;
}

void display(){
    Node* temp = head;
    while (temp != NULL)
    {
        cout << "Item : " << temp->num << "\tNext : " << temp->next << endl;
        temp = temp->next;
    }
    cout << "Size of the list is : " << count << endl;
}

void remove(){
    if (head == NULL)
    {
        cout << "List is Empty!" << endl;
    } else {
        cout << head->num << " is removed!" << endl;
        count--;
        head = head->next;
    }
    
}


int main()
{
    insert(10);
    insert(20);
    insert(30);
    display();
    remove();
    remove();
    display();
    return 0;
}
