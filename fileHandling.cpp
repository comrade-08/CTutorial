#include <iostream>
#include <conio.h>
#include <fstream>
using namespace std;

class Users
{
private:
    typedef struct userTemplate
    {
        string username;
        string password;
    } user;
    user users[10];
    int usersCount = 0;

public:
    friend void save(Users u);
    friend void show();
    void getUserDetails();
};

void Users::getUserDetails()
{
    int i = 0;
    cout << "How many users you want to add ?";
    cin >> usersCount;
    while (i < usersCount)
    {
        cout << "Enter your username : ";
        cin >> users[i].username;
        cout << "Enter your password : ";
        cin >> users[i].password;
        i++;
    }
}

void save(Users u)
{
    int i = 0;
    ofstream outfile("sample.txt");
    while (i < u.usersCount)
    {
        outfile << "Username : " << u.users[i].username << "\n";
        outfile << "Password : " <<  u.users[i].password << "\n";
        i++;
    }
    outfile.close();
}

void show()
{
    ifstream infile("sample.txt");
    string line;
    while (getline(infile, line))
    {
        cout << line << endl;
    }
    infile.close();
}

int main()
{
    Users u;
    u.getUserDetails();
    save(u);
    show();
    return 0;
}