#include <iostream>
#include <conio.h>
using namespace std;

int main(){
    string fruits[3] = {"apple", "orange", "banana"};
    string *ptrP = fruits;
    string *ptr0 = &fruits[0];
    string *ptr1 = &fruits[1];
    string *ptr2 = &fruits[2];
    // cout << ptrP << "\t" << sizeof(ptrP) << "\t" << *ptrP << endl;
    // cout << ptr0 << "\t" << sizeof(ptr0) << "\t" << *ptr0 << endl;
    // cout << ptr1 << "\t" << sizeof(ptr1) << "\t" << *ptr1 << endl;
    // cout << ptr2 << "\t" << sizeof(ptr2) << "\t" << *ptr2 << endl;
    delete ptrP;
    delete ptr0;
    delete ptr1;
    delete ptr2;

    // malloc calloc
    string *malloc_ptr = (string*)malloc(5 * sizeof(string));
    int *calloc_ptr = (int*)calloc(5, sizeof(int));

    for (int i = 0; i < sizeof(malloc_ptr); i++)
    {
        cout << malloc_ptr[i] << endl;
    }

    for (int i = 0; i < sizeof(calloc_ptr); i++)
    {
        cout << calloc_ptr[i] << endl;
    }
    
    return 0;
}