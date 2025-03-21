#include <iostream>
#include <conio.h>
#include <stdexcept>
using namespace std;

class practice
{
private:
public:
};

int main(){
    try
    {
        if(0==0) throw std::logic_error("new error");
    }
    catch(const exception& e)
    {
       std::cout << "Manual : " << e.what();
    }
    std::cout << "helo";
    
    return 0;
}