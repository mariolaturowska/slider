const people = [
    {
        name: 'Person1',
        id:1,
        occupation: 'Founder',
        location: 'Warsaw',
        url:'https://images.unsplash.com/photo-1546521446-af1ec6949e8f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9'
    },
    {
        name: 'Person2',
        id:2,
        occupation: 'Founder',
        location: 'Warsaw',
        url:'https://images.unsplash.com/photo-1545531665-cf5f66c3d667?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9'
    },
    {
        name: 'Person3',
        id:3,
        occupation: 'Head of Human Resources',
        location: 'Warsaw',
        url:'https://images.unsplash.com/photo-1547093841-7c02540c29e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9'
    },
    {
        name: 'Person4',
        id:4,
        occupation: 'Chief Growth Officer(CGO)',
        location: 'London',
        url:'https://images.unsplash.com/photo-1545014424-4140a5631558?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9'
    },
    {
        name: 'Person5',
        id:5,
        occupation: 'Business Development',
        location: 'London',
        url:'https://images.unsplash.com/photo-1547087122-1817e13ac8a9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9'
    },
    {
        name: 'Person6',
        id:6,
        occupation: 'Business Development Director US',
        location: 'Los Angeles',
        url:'https://images.unsplash.com/photo-1544806861-dc05b18f6c13?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9'
    },
    {
        name: 'Person7',
        id:7,
        occupation: 'Chef Business Development Officer (CBDO)',
        location: 'Warsaw',
        url:'https://images.unsplash.com/photo-1545412654-d9bede45c31b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9'
    },
    {
        name: 'Person8',
        id:8,
        occupation: 'International Client Service Manager',
        location: 'Warsaw',
        url:'https://images.unsplash.com/photo-1546201483-a0fa9e5ed258?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9'
    },
    {
        name: 'Person9',
        id:9,
        occupation: 'Creation Manager',
        location: 'Warsaw',
        url:'https://images.unsplash.com/photo-1546531158-f7d27dac3047?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9'
    },
    {
        name: 'Person10',
        id:10,
        occupation: 'Head of Communication',
        location: 'Warsaw',
        url:'https://images.unsplash.com/photo-1546139383-ef33df8cfa31?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&ixid=eyJhcHBfaWQiOjF9'
    },
];

const person=(state=people,action)=>{
    switch (action.type){
        case 'CLICK_PERSON':
            return state;
        default:
            return state;
    }
};

export default person;