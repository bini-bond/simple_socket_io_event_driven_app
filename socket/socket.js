

let socketId;
let nameOfUsers = [];


function socket(io){
    io.on('connection',function(socket){ 
        console.log(' a user connected'+" "+ socket.id);
        socketId=socket.id;
        socket.on("connectwith",function(){
            console.log("send message");
        });
        
        socket.on('chat', function(data){
            // console.log(data);
            io.sockets.emit('chat', data);
        });
       
        
        // Handle typing event
        socket.on('typing', function(data){
            socket.broadcast.emit('typing', data);
        });
        
        
     

    });
}

module.exports = socket;
module.exports.getSocketId= function(){
    return socketId;
};
