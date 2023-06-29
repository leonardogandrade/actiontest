const exec = require('child_process').exec;

exec('cat tags', (error, stdout, stderr) => {
    console.log(stdout)
})
