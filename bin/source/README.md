
## Combo Component


### `Props`


| Name        | Type |Default            | Description|
| ------------- |---|:-------------:| -----|
| label      |  string | | 'status' |
| items      |  array | |   [{value:1,label:'red'},{value:2,label:'blue'}] |
| fullWidth  | boolean   | false | if true, fill it's container   |
| valueProp  | string   | 'value' | value prop name in items array    |
| labelProp  | string   | 'label' | label prop name in items array    |
| disabled  | boolean   | false |     |
| selectedValue  | typeof value   |    |
| onChange  | event   |  | fire when selected item changed|

### `Example`


    <Combo option={
        {
            label: 'سن',
            items: [
                {value: 10, label: 'ten'},
                {value: 20, label: 'twenty'},
                {value: 30, label: 'thirty'}
            ],
            onChange: handleSelectedItem,
            fullWidth:true
        }
    }/>
    
    <Combo option={
        {
            label: 'وضعیت',
            items: [
                {code: 1, title: 'فعال'},
                {code: 2, title: 'غیر فعال'},
            ],
            valueProp:'code',
            labelProp:'title',
            onChange: handleStatusChange,
            disabled:true,
            selectedValue:2,
        }
    }/>
    
    <Combo option={
        {
            label: 'وضعیت',
            items: [
                {code: 1, title: 'فعال'},
                {code: 2, title: 'غیر فعال'},
            ],
            valueProp:'code',
            labelProp:'title',
            onChange: handleStatusChange,
            disabled:false,
            selectedValue:1
        }
    }/>                  
