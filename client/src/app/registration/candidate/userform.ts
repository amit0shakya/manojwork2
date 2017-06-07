
export class candidateformInfo { 
    constructor(
        public info={
            personelinfo:{
                name:'',
                pass:'',
                email:'',
                phone:'',
                resume:'',
                caddress:{state:'',city:'',caddress:''},
                paddress:{state:'',city:'',paddress:''}
            },
            educationalinfo:[],
            technicalqual:[{
                title:'',
                degree:'',
                duration:{from:'',to:''},
                institute:''
                }] 
        }){}
};


/*

educationalinfo:[{
                title:'',
                marks:'',
                univ:'',
                        duration:{
                            from:'',
                            to:''
                            },
                        subjects:[{
                            name:'',
                            marks:''
                        }]
                }]

*/