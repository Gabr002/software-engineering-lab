#include <bits/stdc++.h>
using namespace std;

int main(){
    vector<int> nums = {1, 2, 3, 3};
    set<int> s;

    for(auto i : nums) s.insert(i);

    
    for(auto i : s) cout << i << " ";

    return 0;
}