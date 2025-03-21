#include <iostream>
#include <conio.h>
using namespace std;

int main(){
    string fruits[3] = {"apple", "orange", "banana"};
    string *ptr0 = &fruits[0];
    string *ptr1 = &fruits[1];
    string *ptr2 = &fruits[2];
    cout << ptr0 << *ptr0 << endl;
    cout << ptr1 << *ptr1 << endl;
    cout << ptr2 << *ptr2 << endl;
    return 0;
}