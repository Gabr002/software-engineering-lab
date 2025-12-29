<<<<<<< HEAD
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
    }
};
=======
#include <bits/stdc++.h>
using namespace std;

int main(){
    vector<int> nums = {2,7,11,15};
    int target = 9;
    for(int i = 0; i < nums.size(); i++){
        cout << nums[i] << " " << nums[nums.size()-i-1] << endl;
        if(nums[i] + nums[nums.size()-i-1] == target){
            cout << i << " " << nums.size()-i-1 << endl;
            break;
        }
    }

    return 0;
}
>>>>>>> 25cb29d (feat: update repository)
