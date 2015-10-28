    var arg1 = process.argv[2];
    var arg2 = process.argv[3];
    
    import M from './ex-05-module';
    console.log(M.PI);
    console.log(M.sqrt(+arg1));
    console.log(M.square(+arg2));
