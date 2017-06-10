export class fresherinfo{
    personal:PersonnelInfo[]
    education: Education[];
    technical: TechnicalInfo[];
    accountinfo:UserAccount[];
}

export class PersonnelInfo{
    name:'';
    email:'';
    pass:'';
    mobile:'';
    address: Address[];
}

export class Address {
    state:'';
    city:'';
    address:'';
    zip:'';
}

export class TechnicalInfo{
    qual:'';
    univ:'';
    degree:'';
    duration:'';
    grade:'';
}


export class Education{
    class:'';
    univ:'';
    marks:'';
    subjects:Subjects[];
    duration:Duration[];
}

export class Subjects{
    title:'';
    marks:'';
}

export class Duration{
    from:'';
    to:'';
}

export class UserAccount{
    user:'';
    pass:'';
    squestion:SecretQues[];
    email:'';
    phone:'';
    password:Passwords[];
}

export class SecretQues{
    question:'';
    answer:'';
}

export class Passwords{
    pass:'';
    oldpass:OldPass[];
}

export class OldPass{
    pass:'';
}

export class States{

}

/*

<th>Class</th>
                    <th>School/<Uni></Uni>versity</th>
                    <th>Subjects</th>
                    <th>Duration</th>
                    <th>Marks%</th>

*/