import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import MenuItem from 'material-ui/MenuItem'

const providerData = [{ "first_name":"John",
"last_name":"Doe", "zip":"01234", "npi":12345
},{ "first_name":"Jane",
"last_name":"Doe", "zip":"93110", "npi":23456
},{ "first_name":"Bran",
"last_name":"Doe", "zip":"93110", "npi":54321
},{ "first_name":"Jack",
"last_name":"Dob", "zip":"94101", "npi":35467
},{ "first_name":"John",
"last_name":"Doe", "zip":"54312", "npi":99999
},{ "first_name":"Jack",
"last_name":"Dob", "zip":"11002", "npi":23556
},{
"organization_name":"Johns Hopkins",
"zip":"01234",
"npi":22222 },{
"organization_name":"Mercy Hospital",
"zip":"93110",
"npi":33333 },{
"organization_name":"General Hospital", "zip":"11002",
"npi":44533
}]

let usedNames = []
let providerCards = []
let menuItems = []

const nameOrOrgName = (providerObject) => {
  return providerObject["organization_name"] || providerObject["first_name"] + " " + providerObject["last_name"]
}

for(let provider of providerData) {
  let matchIndex = providerCards.findIndex(item => item.name === nameOrOrgName(provider))
  if (matchIndex > -1) {
    providerCards[matchIndex]["numSameName"] += 1
    providerCards[matchIndex]["locations"].push(provider["zip"])
    providerCards[matchIndex]["npis"].push(provider["npi"])
  } else {
    usedNames.push(nameOrOrgName(provider))
    let card = {name: nameOrOrgName(provider),
              numSameName: 0,
              locations: [provider["zip"]],
              npis: [provider["npi"]]
              }
  providerCards.push(card)
  }
}

for(let item of providerCards) {
  let menuItem = {name: item.name,
                  menutag: (<MenuItem
                              primaryText={item.name}
                              secondaryText={"We found " + (item.numSameName + 1) + " nearby in " + item.locations.length + " location" + (item.locations.length > 1 ? "s" : "") + "."}
                            />)}
  menuItems.push(menuItem)
}

const providerCardConfig = {
  text: 'name',
  value: 'menutag',
};

export const Search = (props) => (
  <div>
    <h2>Search for a physician or organization</h2>
    <AutoComplete
      floatingLabelText="Search for a doctor, physician, or organization by name"
      filter={AutoComplete.caseInsensitiveFilter}
      dataSource={menuItems}
      dataSourceConfig={providerCardConfig}
      fullWidth={true}
      onUpdateInput={props.updateSearch}
      searchText={props.searchValue}
    />
  </div>
)

Search.propTypes = {
  searchValue     : React.PropTypes.string,
  updateSearch    : React.PropTypes.func
}

export default Search
