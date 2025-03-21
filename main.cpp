using namespace std;
#include <iostream>
#include <conio.h>
#include <chrono>
using namespace chrono;

class base
{
private:
    int a, b;
public:
    base(int x, int y) : a(x), b(y){}
    friend void sum(base b);
    friend class calculations;
};

class calculations {
    public:
        void static subtract(base b);
};

inline void calculations::subtract(base b){
    cout << "Subtaction is : " << b.a - b.b << endl;
}

inline void sum(base b){
    cout << "Sum is : " << b.a + b.b << endl;
}

int main(){
    auto start = high_resolution_clock::now();
    base b(5, 10);
    sum(b);
    calculations::subtract(b);
    auto end = high_resolution_clock::now();
    cout << "Excecution time : " << (duration_cast<microseconds>( end - start)).count();
    return 0;
}
