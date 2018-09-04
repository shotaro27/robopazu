var aaa = "";
var urlParser = require('url'),
	handler = function(req, res) {
		var urlParsed = urlParser.parse(req.url),
			filepath = "";
		aaa += urlParsed.pathname.slice(1) + " ";
		console.log(aaa);
		
		switch (urlParsed.pathname) {
		case "/enchant.js":
			filepath += "/enchant.js";
			break;
		case "/main.js":
			filepath += "/main.js";
			break;
		case "/favicon.ico":
			filepath += "/favicon.ico";
			break;
		case "/ejselect.png":
			filepath += "/ejselect.png";
			break;
		case "/icon.png":
			filepath += "/icon.png";
			break;
		case "/robo002.png":
			filepath += "/robo002.png";
			break;
		case "/marubatu.png":
			filepath += "/marubatu.png";
			break;
		case "/hukidasi1.png":
			filepath += "/hukidasi1.png";
			break;
		case "/pazuniji.png":
			filepath += "/pazuniji.png";
			break;
		case "/roborobo.png":
			filepath += "/roborobo.png";
			break;
		case "/roborobo_en.png":
			filepath += "/roborobo_en.png";
			break;
		case "/pazustart.png":
			filepath += "/pazustart.png";
			break;
		case "/pazustart_en.png":
			filepath += "/pazustart_en.png";
			break;
		case "/robohata4.png":
			filepath += "/robohata4.png";
			break;
		case "/robohata4_en.png":
			filepath += "/robohata4_en.png";
			break;
		case "/start.png":
			filepath += "/start.png";
			break;
		case "/start_en.png":
			filepath += "/start_en.png";
			break;
		case "/robohint.png":
			filepath += "/robohint.png";
			break;
		case "/robo003.png":
			filepath += "/robo003.png";
			break;
		case "/rule.png":
			filepath += "/rule.png";
			break;
		case "/rule_en.png":
			filepath += "/rule_en.png";
			break;
		case "/back.png":
			filepath += "/back.png";
			break;
		case "/time.png":
			filepath += "/time.png";
			break;
		case "/time_en.png":
			filepath += "/time_en.png";
			break;
		case "/kanseiback.png":
			filepath += "/kanseiback.png";
			break;
		case "/kanseibanzai.png":
			filepath += "/kanseibanzai.png";
			break;
		case "/kanseiback2.png":
			filepath += "/kanseiback2.png";
			break;
		case "/kanseiback2_en.png":
			filepath += "/kanseiback2_en.png";
			break;
		case "/waku.png":
			filepath += "/waku.png";
			break;
		case "/kanseiback3.png":
			filepath += "/kanseiback3.png";
			break;
		case "/kanseiback3_en.png":
			filepath += "/kanseiback3_en.png";
			break;
		case "/ranking.png":
			filepath += "/ranking.png";
			break;
		case "/ranking_en.png":
			filepath += "/ranking_en.png";
			break;
		case "/ameuta.mp3":
			filepath += "/ameuta.mp3";
			break;
		case "/game.mp3":
			filepath += "/game.mp3";
			break;
		case "/polon.mp3":
			filepath += "/polon.mp3";
			break;
		case "/roborobo02.png":
			filepath += "/roborobo02.png";
			break;
		case "/hajime.png":
			filepath += "/hajime.png";
			break;
		case "/hajime_en.png":
			filepath += "/hajime_en.png";
			break;
		case "/roborobosan.png":
			filepath += "/roborobosan.png";
			break;
		case "/rankca.png":
			filepath += "/rankca.png";
			break;
		default:
			filepath += "/index.html";
			break;
		}
		fs.readFile(__dirname + filepath,
			function (err, data) {
				if (err) {
					console.log(err);
					res.writeHead(500);
					return res.end("Error");
				}
				res.writeHead(200);
				res.write(data);
				res.end();
			}
		);
	},
	http = require("http"),
	app = http.createServer(handler),
	fs = require("fs"),
	io = require("socket.io").listen(app);
	var j5 = require('johnny-five'),
	arduino = new j5.Board({port: "COM10"});
app.listen(3141);
io.set("log level", 1);
arduino.on('ready', function () {
    var mswitch = [
		[2, 6, 10, 22, 23, 34, 35, 46, 47],
		[3, 7, 11, 24, 25, 36, 37, 48, 49],
		[4, 8, 12, 26, 27, 38, 39, 50, 51],
		[5, 9, 13, 28, 29, 40, 41, 52, 53]
	];
    var buttons = [];
    for (var i = 0; i < mswitch[0].length; i++) {
        buttons[i] = new j5.Buttons([{
            pin: mswitch[0][i], //2, 6, 10, 22, 23, 34, 35, 46, 47 
            invert: true,
            isPullup: true
        }, {
            pin: mswitch[1][i], //3, 7, 11, 24, 25, 36, 37, 48, 49
            invert: true,
            isPullup: true
        }, {
            pin: mswitch[2][i], //4, 8, 12, 26, 27, 38, 39, 50, 51
            invert: true,
            isPullup: true
        }, {
            pin: mswitch[3][i], //5, 9, 13, 28, 29, 40, 41, 52, 53
            invert: true,
            isPullup: true
        }]);
    }
	var sbutton1 = new j5.Button({
		pin: 31,
		invert: true,
		isPullup: true
    });
    var sbutton2 = new j5.Button({
		pin: 30,
		invert: true,
		isPullup: true
    });
    var sbutton3 = new j5.Button({
		pin: 42,
		invert: true,
		isPullup: true
	});
	io.on('connection', function(socket) {
		socket.emit('emit_from_server', 'Initialized');
		for (var i = 0; i < 9; i++) {
			for (var j = 0; j < 4; j++) {
				(function (i2, j2) {
					buttons[i2][j2].on("down", function() {
						socket.json.emit('emit_from_server', {
							i : i2,
							j : j2,
							e : false
						});
						console.log(i2 + ", " + j2 + "up");
					});
					buttons[i][j].on("up", function() {
							socket.json.emit('emit_from_server', {
								i : i2,
								j : j2,
								e : true
							});
							console.log(i2 + ", " + j2 + "down");
					});
				})(i, j);
			}
		}
		sbutton1.on('down', function () {
			socket.emit('emit_from_server', 'enter');
			console.log("e");
		});
		sbutton2.on('down', function () {
			socket.emit('emit_from_server', 'enter2');
			console.log("e2");
		});
		sbutton2.on('up', function () {
			socket.emit('emit_from_server', 'enter2up');
			console.log("e2u");
		});
		sbutton3.on('down', function () {
			socket.emit('emit_from_server', 'enter3');
			console.log("e3");
		});
		sbutton3.on('up', function () {
			socket.emit('emit_from_server', 'enter3up');
			console.log("e3u");
		});
	});
});
