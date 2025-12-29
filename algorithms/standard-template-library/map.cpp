#include <bits/stdc++.h>
using namespace std;

struct CityRecord{
    string Name;
    uint64_t Population;
    double Latitude, Longitude;
};

int main(){
    vector<CityRecord> cities;

    cities.emplace_back(CityRecord{"New York", 8419600, 40.7128, -74.0060});
    cities.emplace_back(CityRecord{"Los Angeles", 3980400, 34.0522, -118.2437});
    cities.emplace_back(CityRecord{"Chicago", 2716000, 41.8781, -87.6298});

    for(const auto& city : cities){
        if(city.Name == "chicago"){
            city.Population;
            break;
        }
    }

    map<string, CityRecord> cityMap;
    cityMap["New York"] = CityRecord{"New York", 8419600, 40.7128, -74.0060};
    cityMap["Los Angeles"] = CityRecord{"Los Angeles", 3980400, 34.0522, -118.2437};
    cityMap["Chicago"] = CityRecord{"Chicago", 2716000, 41.8781, -87.6298};
    
}