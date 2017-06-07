var Client = require('ssh2').Client;
 
const conn = new Client();
conn.on('ready', function() {
  console.log('Client :: ready');
  conn.exec('Workspaces/Bash/proceso.sh', function(err, stream) {
    if (err) throw err;
    stream.on('close', function(code, signal) {
      console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
      conn.end();
    }).on('data', function(data) {
      console.log('STDOUT: ' + data);
    }).stderr.on('data', function(data) {
      console.log('STDERR: ' + data);
    });
  });
}).connect({
  host: '192.168.88.7',
  port: 22,
  username: 'pi',
  privateKey: require('fs').readFileSync('/home/sebaxtian/Workspace/Node/test-ssh2/id_rsa/id_rsa')
});
