using namespace std;
#include <iostream>
#include <conio.h>

class cons_dest
{
private:
    /* data */
public:
    cons_dest(/* args */);
    ~cons_dest();
};

cons_dest::cons_dest(/* args */)
{
    cout << "constructor block\n";
}

cons_dest::~cons_dest()
{
    cout << "destructor block\n";
}

int main()
{
    cons_dest cd;
    getch();
    return 0;
}

