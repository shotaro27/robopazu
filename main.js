enchant();
var remote = io.connect('http://localhost:3141');
function readCookie(key) {
	var dim = document.cookie.split(';'), dimvalue;
	for (var i = 0; i < dim.length; i++) {
		dimvalue = dim[i].split('=');
		if (dimvalue[0].trim() == key) {
			return dimvalue[1].trim();
		}
	}
}
window.onload = function () {
	remote.on('emit_from_server', function (data) {
		if (data == 'Initialized') {
			console.log('Initialized');
			console.log('hello ' + enchant.ENV.BROWSER);
			console.log('enchantjsのバージョン：' + enchant.ENV.VERSION);
			var core = new Core(1536, 864);
			core.fps = 24;
			core.preload("robo002.png", "marubatu.png", "icon.png", "ejselect.png", "pazuniji.png", "roborobo.png", "pazustart.png",
			"robohata4.png", "start.png", "robohint.png", "robo003.png",
			"rule.png", "back.png", "time.png", "kanseiback.png", "kanseibanzai.png",
			"kanseiback2.png", "waku.png", "kanseiback3.png", "ranking.png",
			"roborobo02.png", "hajime.png", "hajime_en.png", "roborobosan.png",
			"rankca.png", "roborobo_en.png", "pazustart_en.png", "start_en.png",
			"robohata4_en.png", "rule_en.png", "time_en.png", "kanseiback3_en.png",
			"kanseiback2_en.png", "ranking_en.png");
			core.onload = function () {
				var stscene = new Scene();
				var game = new Scene();
				var clscene = new Scene();
				var mdscene = new Scene();
				var nmscene = new Scene();
				var jnscene = new Scene();
				var iniscene = new Scene();
				var song = function (audioname, type) {
					return enchant.DOMSound.load(audioname + "." + type, "audio/" + type, function(){}, function(){});
				},
				startv = song("ameuta", "mp3"),
				gamev = song("game", "mp3"),
				clearv = song("polon", "mp3");
				var robod = [
					[false, false, false, false],
					[false, false, false, false],
					[false, false, false, false],
					[false, false, false, false],
					[false, false, false, false],
					[false, false, false, false],
					[false, false, false, false],
					[false, false, false, false],
					[false, false, false, false]
				];
				if (readCookie("ROBODATA") !== undefined) {
					robod = JSON.parse(readCookie("ROBODATA"));
				}
				var r1 = new Sprite(200, 200);
				var r2 = new Sprite(200, 200);
				var r3 = new Sprite(200, 200);
				var r4 = new Sprite(200, 200);
				var r5 = new Sprite(200, 200);
				var r6 = new Sprite(200, 200);
				var r7 = new Sprite(200, 200);
				var r8 = new Sprite(200, 200);
				var r9 = new Sprite(200, 200);
				var a1 = new Sprite(200, 200);
				var a2 = new Sprite(200, 200);
				var a3 = new Sprite(200, 200);
				var a4 = new Sprite(200, 200);
				var a5 = new Sprite(200, 200);
				var a6 = new Sprite(200, 200);
				var a7 = new Sprite(200, 200);
				var a8 = new Sprite(200, 200);
				var a9 = new Sprite(200, 200);
				var aback = new Sprite(600, 600);
				var rback = new Sprite(600, 600);
				var answers = [];
				var roboa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
				var q = new Label();
				var ques = [new Label(), new Label(), new Label(), new Label(), new Label(), new Label(), new Label(), new Label(), new Label()];
				var rbrb = [new Sprite(384, 500), new Sprite(384, 500), new Sprite(384, 500), new Sprite(384, 500),
					new Sprite(300, 300), new Sprite(300, 300), new Sprite(300, 300)];
				var mselect = new Sprite(1200, 1200);
				var pniji = new Sprite(1536, 864);
				var pazuru = new Sprite(1536, 864);
				var x;
				var mistake = 0;
				var marubatu = new Sprite(500, 500);
				var hint = [new Sprite(200, 200), new Sprite(200, 200), new Sprite(200, 200),
					new Sprite(200, 200), new Sprite(200, 200), new Sprite(200, 200),
					new Sprite(200, 200), new Sprite(200, 200), new Sprite(200, 200)];
				var selectmode = 0;
				var start321 = new Sprite(1200, 500);
				var modestart = new Sprite(500, 500);
				var rule = new Sprite(1536, 864);
				var back = new Sprite(1536, 1728);
				var time = new Sprite(1400, 150);
				var kanseiback = new Sprite(1536, 864);
				var kanseimoji = new Sprite(1536, 864);
				var banzai = new Sprite(1536, 864);
				var waku = new Sprite(200, 200);
				var namearea = new Label();
				var r = new Label();
				var abc = [];
				var a = 0;
				var age;
				var junni = [[]];
				var ssf;
				var logo = new Sprite(1536, 864);
				var ej = new Sprite(1536, 864);
				var language = false;
				var movemode = true;
				remote.on('emit_from_server', function (data) {
					switch (data) {
						case "enter":
							if (core.currentScene === game) {
								if (movemode) {
									var isreload = 0;
									for (var i = 0; i < robod.length; i++) {
										for (var j = 0; j < robod[0].length; j++) {
											if (!robod[i][j]) {
												isreload++;
											}
										}
									}
									if (isreload  == robod.length * robod[0].length){
										location.reload();
									} else {
										time.frame = 3;
										game.addChild(r1);
										game.addChild(r2);
										game.addChild(r3);
										game.addChild(r4);
										game.addChild(r5);
										game.addChild(r6);
										game.addChild(r7);
										game.addChild(r8);
										game.addChild(r9);
										r1.frame = toTheNumber(robod[0]) - 1;
										r2.frame = toTheNumber(robod[1]) - 1;
										r3.frame = toTheNumber(robod[2]) - 1;
										r4.frame = toTheNumber(robod[3]) - 1;
										r5.frame = toTheNumber(robod[4]) - 1;
										r6.frame = toTheNumber(robod[5]) - 1;
										r7.frame = toTheNumber(robod[6]) - 1;
										r8.frame = toTheNumber(robod[7]) - 1;
										r9.frame = toTheNumber(robod[8]) - 1;
										x = -1;
										answers = [
											r1.frame,
											r2.frame,
											r3.frame,
											r4.frame,
											r5.frame,
											r6.frame,
											r7.frame,
											r8.frame,
											r9.frame
										];
										if (answers.every(function (robos) {
											x++;
											return robos == roboa[x];
										})) {
											gamev.stop();
											marubatu.frame = 0;
											game.addChild(marubatu);
											marubatu.tl.clear();
											marubatu.tl
											.delay(24)
											.then(function () {
												time.frame = 0;
											})
											.then(clearScene)
											.removeFromScene();
										} else {
											marubatu.frame = 1;
											game.addChild(marubatu);
											marubatu.tl
											.delay(24)
											.then(function () {
												time.frame = 0;
												game.removeChild(r1);
												game.removeChild(r2);
												game.removeChild(r3);
												game.removeChild(r4);
												game.removeChild(r5);
												game.removeChild(r6);
												game.removeChild(r7);
												game.removeChild(r8);
												game.removeChild(r9);
											})
											.removeFromScene();
											mistake++;
										}
									}
								}
							} else if (core.currentScene === stscene) {
								stscene.tl.clear();
								rbrb[0].tl.clear();
								rbrb[1].tl.clear();
								rbrb[2].tl.clear();
								rbrb[3].tl.clear();
								rbrb[4].tl.clear();
								rbrb[5].tl.clear();
								rbrb[6].tl.clear();
								pniji.tl.clear();
								modeScene();
							} else if (core.currentScene === mdscene) {
								mselect.tl.clear();
								startv.stop();
								movemode = false;
								gameScene();
							} else if (core.currentScene === nmscene) {
								var mojiid = (waku.y - 60) / 120 * 7 + (waku.x - 190) / 160;
								if (mojiid == 26) {
									abc.pop();
									namearea.text = namearea.text.substr(0, namearea.text.length - 1);
									a--;
								} else if (mojiid == 27) {
									junniScene(abc.join(''));
									abc = [];
									a = 0;
								} else if (a < 7) {
									abc[a] = String.fromCharCode(mojiid + 65);
									namearea.text += abc[a];
									a++;
								}
							} else if (core.currentScene === jnscene) {
								clearv.stop();
								init();
							} else if (core.currentScene === iniscene) {
								language = (ej.frame == 1);
								startScene();
							}
							break;
						case "enter2":
							if (core.currentScene === mdscene) {
								if (movemode) {
									movemode = false;
									mselect.frame = 0;
									mdscene.removeChild(rule);
									modestart.frame = 1;
									mselect.rotation = selectmode * -120;
									mselect.tl.rotateBy(120, 24).then(function () {
										mselect.rotation = 0;
										mselect.frame = selectmode + 1;
										rule.frame = selectmode;
										modestart.frame = 0;
										mdscene.addChild(rule);
										movemode = true;
									});
									selectmode = (selectmode + 2) % 3;
								}
							} else if (core.currentScene === game) {
								game.addChild(hint[0]);
								game.addChild(hint[1]);
								game.addChild(hint[2]);
								game.addChild(hint[3]);
								game.addChild(hint[4]);
								game.addChild(hint[5]);
								game.addChild(hint[6]);
								game.addChild(hint[7]);
								game.addChild(hint[8]);
								time.frame = 1;
							} else if (core.currentScene === nmscene) {
								waku.x -= 160;
								if (waku.x == 30) {
									if (waku.y == 60) {
										waku.y = 420;
									} else {
										waku.y -= 120;
									}
									waku.x = 1150;
								}
							} else if (core.currentScene === iniscene) {
								ej.frame = (ej.frame + 1) % 2;
							}
							break;
						case "enter2up":
							game.removeChild(hint[0]);
							game.removeChild(hint[1]);
							game.removeChild(hint[2]);
							game.removeChild(hint[3]);
							game.removeChild(hint[4]);
							game.removeChild(hint[5]);
							game.removeChild(hint[6]);
							game.removeChild(hint[7]);
							game.removeChild(hint[8]);
							time.frame = 0;
							break;
						case "enter3":
							if (core.currentScene === mdscene) {
								if (movemode) {
									movemode = false;
									mselect.frame = 0;
									mdscene.removeChild(rule);
									modestart.frame = 2;
									mselect.rotation = selectmode * -120;
									mselect.tl.rotateBy(-120, 24).then(function () {
										mselect.rotation = 0;
										mselect.frame = selectmode + 1;
										modestart.frame = 0;
										rule.frame = selectmode;
										mdscene.addChild(rule);
										movemode = true;
									});
									selectmode = (selectmode + 1) % 3;
								}
							} else if (core.currentScene === game) {
								time.frame = 2;
								r1.frame = toTheNumber(robod[0]) - 1;
								r2.frame = toTheNumber(robod[1]) - 1;
								r3.frame = toTheNumber(robod[2]) - 1;
								r4.frame = toTheNumber(robod[3]) - 1;
								r5.frame = toTheNumber(robod[4]) - 1;
								r6.frame = toTheNumber(robod[5]) - 1;
								r7.frame = toTheNumber(robod[6]) - 1;
								r8.frame = toTheNumber(robod[7]) - 1;
								r9.frame = toTheNumber(robod[8]) - 1;
								game.addChild(r1);
								game.addChild(r2);
								game.addChild(r3);
								game.addChild(r4);
								game.addChild(r5);
								game.addChild(r6);
								game.addChild(r7);
								game.addChild(r8);
								game.addChild(r9);
								rback.removeEventListener("enterframe", robomove);
								rback.frame = 19;
							} else if (core.currentScene === clscene) {
								nameScene();
							} else if (core.currentScene === nmscene) {
								waku.x += 160;
								if (waku.x == 1310) {
									if (waku.y == 420) {
										waku.y = 60;
									} else {
										waku.y += 120;
									}
									waku.x = 190;
								}
							} else if (core.currentScene === iniscene) {
								ej.frame = (ej.frame + 1) % 2;
							}
							break;
						case "enter3up":
							time.frame = 0;
							game.removeChild(r1);
							game.removeChild(r2);
							game.removeChild(r3);
							game.removeChild(r4);
							game.removeChild(r5);
							game.removeChild(r6);
							game.removeChild(r7);
							game.removeChild(r8);
							game.removeChild(r9);
							rback.on("enterframe", robomove);
							break;
						default:
							if (data !== "enter2" && data !== "enter3") {
								remote.client_i = data.i;
								remote.client_j = data.j;
								remote.client_e = data.e;
								robod[remote.client_i][remote.client_j] = remote.client_e;
								document.cookie = "ROBODATA=" + JSON.stringify(robod);
							}
							break;
					}
				});
				function init() {
					logo.x = 0;
					logo.y = 0;
					logo.image = core.assets["icon.png"];
					logo.opacity = 0;
					iniscene.addChild(logo);
					ej.x = 0;
					ej.y = 0;
					ej.image = core.assets["ejselect.png"];
					ej.frame = 0;
					iniscene.removeChild(ej);
					logo.tl.fadeIn(24).delay(48).fadeOut(24).delay(12).then(function() {
						iniscene.addChild(ej);
					});
					core.replaceScene(iniscene);
				}
				rbrb[0].scale(0.75, 0.75);
				rbrb[1].scale(0.75, 0.75);
				rbrb[2].scale(0.75, 0.75);
				rbrb[3].scale(0.75, 0.75);
				rbrb[4].scale(0.75, 0.75);
				rbrb[5].scale(0.75, 0.75);
				rbrb[6].scale(0.75, 0.75);
				function startScene() {
					back.x = 0;
					back.y = 0;
					back.image = core.assets["back.png"];
					stscene.addChild(back);
					pniji.x = 0;
					pniji.y = 0;
					pniji.opacity = 0;
					pniji.image = core.assets["pazuniji.png"];
					stscene.addChild(pniji);
					pazuru.x = 0;
					pazuru.y = -864;
					rbrb[0].x = 50;
					rbrb[1].x = 384;
					rbrb[2].x = 768;
					rbrb[3].x = 1102;
					rbrb[0].y = 0;
					rbrb[1].y = -50;
					rbrb[2].y = -50;
					rbrb[3].y = 0;
					rbrb[0].frame = 0;
					rbrb[1].frame = 1;
					rbrb[2].frame = 2;
					rbrb[3].frame = 3;
					rbrb[4].x = 1250;
					rbrb[4].y = 400;
					rbrb[5].x = 50;
					rbrb[5].y = 450;
					rbrb[5].frame = 1;
					rbrb[6].x = 1100;
					rbrb[6].y = 600;
					rbrb[6].frame = 2;
					rbrb[4].image = core.assets["roborobo02.png"];
					rbrb[5].image = core.assets["roborobo02.png"];
					rbrb[6].image = core.assets["roborobo02.png"];
					var hajimeru = new Sprite(1536, 864);
					hajimeru.x = 0;
					hajimeru.y = 0;
					if (language) {
						hajimeru.image = core.assets["hajime.png"];
						rbrb[0].image = core.assets["roborobo.png"];
						rbrb[1].image = core.assets["roborobo.png"];
						rbrb[2].image = core.assets["roborobo.png"];
						rbrb[3].image = core.assets["roborobo.png"];
						pazuru.image = core.assets["pazustart.png"];
					} else {
						hajimeru.image = core.assets["hajime_en.png"];
						rbrb[0].image = core.assets["roborobo_en.png"];
						rbrb[1].image = core.assets["roborobo_en.png"];
						rbrb[2].image = core.assets["roborobo_en.png"];
						rbrb[3].image = core.assets["roborobo_en.png"];
						pazuru.image = core.assets["pazustart_en.png"];
					}
					stscene.addChild(pazuru);
					stscene.addChild(rbrb[0]);
					startv.play();
					rbrb[0].tl
					.cue({
						24: function () {
							stscene.addChild(rbrb[1]);
						},
						48: function () {
							stscene.addChild(rbrb[2]);
						},
						72: function () {
							stscene.addChild(rbrb[3]);
						},
						96: function () {
							pniji.tl.fadeTo(0.5, 24);
						},
						120: function () {
							pazuru.tl.moveY(0, 24, enchant.Easing.BOUNCE_EASEOUT).then(function () {
								stscene.addChild(rbrb[4]);
								stscene.addChild(rbrb[5]);
								stscene.addChild(rbrb[6]);
								stscene.addChild(hajimeru);
							});
							this.tl.rotateBy(30, 8).rotateBy(-30, 8);
							rbrb[1].tl.delay(8).rotateBy(30, 8).rotateBy(-30, 8);
							rbrb[2].tl.delay(16).rotateBy(30, 8).rotateBy(-30, 8);
							rbrb[3].tl.delay(24).rotateBy(30, 8).rotateBy(-30, 8);
							rbrb[4].tl.delay(32).rotateBy(30, 8).rotateBy(-30, 8);
							rbrb[5].tl.delay(40).rotateBy(30, 8).rotateBy(-30, 8);
							rbrb[6].tl.delay(48).rotateBy(30, 8).rotateBy(-30, 8);
						}
					});
					stscene.tl.delay(100 * core.fps).then(function () {
						startv.stop();
						startv.play();
					}).loop();
					core.replaceScene(stscene);
				}
				mselect.scale(0.9, 0.9);
				function modeScene() {
					mdscene.addChild(back);
					mdscene.addChild(pniji);
					selectmode = 0;
					pniji.tl.fadeOut(24).and().moveY(-core.height / 2, 24);
					back.tl.moveY(-core.height, 24);
					mselect.x = (core.width - mselect.width) / 2;
					mselect.y = core.height;
					mselect.frame = 1;
					modestart.x = 0;
					modestart.y = 300;
					modestart.frame = 0;
					rule.x = 0;
					rule.y = 0;
					rule.frame = 0;
					if (language) {
						mselect.image = core.assets["robohata4.png"];
						modestart.image = core.assets["start.png"];
						rule.image = core.assets["rule.png"];
					} else {
						mselect.image = core.assets["robohata4_en.png"];
						modestart.image = core.assets["start_en.png"];
						rule.image = core.assets["rule_en.png"];
					}
					mdscene.addChild(mselect);
					mselect.tl.moveY(((core.height - mselect.height) / 2) + 100, 48).then(function () {
						mdscene.addChild(modestart);
						mdscene.addChild(rule);
					});
					core.replaceScene(mdscene);
				}
				r1.scale(0.9, 0.9);
				r2.scale(0.9, 0.9);
				r3.scale(0.9, 0.9);
				r4.scale(0.9, 0.9);
				r5.scale(0.9, 0.9);
				r6.scale(0.9, 0.9);
				r7.scale(0.9, 0.9);
				r8.scale(0.9, 0.9);
				r9.scale(0.9, 0.9);
				a1.scale(0.9, 0.9);
				a2.scale(0.9, 0.9);
				a3.scale(0.9, 0.9);
				a4.scale(0.9, 0.9);
				a5.scale(0.9, 0.9);
				a6.scale(0.9, 0.9);
				a7.scale(0.9, 0.9);
				a8.scale(0.9, 0.9);
				a9.scale(0.9, 0.9);
				hint[0].scale(0.9, 0.9);
				hint[1].scale(0.9, 0.9);
				hint[2].scale(0.9, 0.9);
				hint[3].scale(0.9, 0.9);
				hint[4].scale(0.9, 0.9);
				hint[5].scale(0.9, 0.9);
				hint[6].scale(0.9, 0.9);
				hint[7].scale(0.9, 0.9);
				hint[8].scale(0.9, 0.9);
				marubatu.scale(1.5, 1.5);
				function gameScene() {
					r3.x = core.width - (core.width / 7 + r1.width / 2);
					r2.x = r3.x - 200;
					r1.x = r2.x - 200;
					r4.x = r1.x;
					r5.x = r2.x;
					r6.x = r3.x;
					r7.x = r1.x;
					r8.x = r2.x;
					r9.x = r3.x;
					r1.y = 200;
					r2.y = 200;
					r3.y = 200;
					r4.y = 400;
					r5.y = 400;
					r6.y = 400;
					r7.y = 600;
					r8.y = 600;
					r9.y = 600;
					a1.x = core.width / 7 - a1.width / 2;
					a2.x = a1.x + 200;
					a3.x = a2.x + 200;
					a4.x = a1.x;
					a5.x = a2.x;
					a6.x = a3.x;
					a7.x = a1.x;
					a8.x = a2.x;
					a9.x = a3.x;
					a1.y = 200;
					a2.y = 200;
					a3.y = 200;
					a4.y = 400;
					a5.y = 400;
					a6.y = 400;
					a7.y = 600;
					a8.y = 600;
					a9.y = 600;
					if (selectmode != 0) {
						ques[0].x = a1.x;
						ques[1].x = a2.x;
						ques[2].x = a3.x;
						ques[3].x = a1.x;
						ques[4].x = a2.x;
						ques[5].x = a3.x;
						ques[6].x = a1.x;
						ques[7].x = a2.x;
						ques[8].x = a3.x;
						ques[0].y = 260 + (selectmode == 2? 16 : 0);
						ques[1].y = 260 + (selectmode == 2? 16 : 0);
						ques[2].y = 260 + (selectmode == 2? 16 : 0);
						ques[3].y = 460 + (selectmode == 2? 16 : 0);
						ques[4].y = 460 + (selectmode == 2? 16 : 0);
						ques[5].y = 460 + (selectmode == 2? 16 : 0);
						ques[6].y = 660 + (selectmode == 2? 16 : 0);
						ques[7].y = 660 + (selectmode == 2? 16 : 0);
						ques[8].y = 660 + (selectmode == 2? 16 : 0);
						ques[0].width = 200;
						ques[0].height = 200;
						ques[1].width = 200;
						ques[1].height = 200;
						ques[2].width = 200;
						ques[2].height = 200;
						ques[3].width = 200;
						ques[3].height = 200;
						ques[4].width = 200;
						ques[4].height = 200;
						ques[5].width = 200;
						ques[5].height = 200;
						ques[6].width = 200;
						ques[6].height = 200;
						ques[7].width = 200;
						ques[7].height = 200;
						ques[8].width = 200;
						ques[8].height = 200;
						ques[0].font = "bold " + (selectmode == 2? 40 : 60) + "px Arial";
						ques[1].font = "bold " + (selectmode == 2? 40 : 60) + "px Arial";
						ques[2].font = "bold " + (selectmode == 2? 40 : 60) + "px Arial";
						ques[3].font = "bold " + (selectmode == 2? 40 : 60) + "px Arial";
						ques[4].font = "bold " + (selectmode == 2? 40 : 60) + "px Arial";
						ques[5].font = "bold " + (selectmode == 2? 40 : 60) + "px Arial";
						ques[6].font = "bold " + (selectmode == 2? 40 : 60) + "px Arial";
						ques[7].font = "bold " + (selectmode == 2? 40 : 60) + "px Arial";
						ques[8].font = "bold " + (selectmode == 2? 40 : 60) + "px Arial";
						ques[0].color = "white";
						ques[1].color = "white";
						ques[2].color = "white";
						ques[3].color = "white";
						ques[4].color = "white";
						ques[5].color = "white";
						ques[6].color = "white";
						ques[7].color = "white";
						ques[8].color = "white";
						ques[0].textAlign = "center";
						ques[1].textAlign = "center";
						ques[2].textAlign = "center";
						ques[3].textAlign = "center";
						ques[4].textAlign = "center";
						ques[5].textAlign = "center";
						ques[6].textAlign = "center";
						ques[7].textAlign = "center";
						ques[8].textAlign = "center";
					}
					q.x = 300;
					q.y = 70;
					time.x = core.width / 2 - time.width / 2;
					time.y = 30;
					game.addChild(time);
					game.addChild(q);
					hint[0].x = r1.x;
					hint[0].y = r1.y;
					hint[1].x = r2.x;
					hint[1].y = r2.y;
					hint[2].x = r3.x;
					hint[2].y = r3.y;
					hint[3].x = r4.x;
					hint[3].y = r4.y;
					hint[4].x = r5.x;
					hint[4].y = r5.y;
					hint[5].x = r6.x;
					hint[5].y = r6.y;
					hint[6].x = r7.x;
					hint[6].y = r7.y;
					hint[7].x = r8.x;
					hint[7].y = r8.y;
					hint[8].x = r9.x;
					hint[8].y = r9.y;
					aback.x = a1.x;
					aback.y = a1.y;
					rback.x = r1.x;
					rback.y = r1.y;
					start321.x = (core.width - start321.width) / 2;
					start321.y = (core.height - start321.height) / 2;
					start321.image = core.assets["start.png"];
					r1.image = core.assets["robo002.png"];
					r2.image = core.assets["robo002.png"];
					r3.image = core.assets["robo002.png"];
					r4.image = core.assets["robo002.png"];
					r5.image = core.assets["robo002.png"];
					r6.image = core.assets["robo002.png"];
					r7.image = core.assets["robo002.png"];
					r8.image = core.assets["robo002.png"];
					r9.image = core.assets["robo002.png"];
					aback.image = core.assets["robo003.png"];
					rback.image = core.assets["robo003.png"];
					hint[0].image = core.assets["robohint.png"];
					hint[1].image = core.assets["robohint.png"];
					hint[2].image = core.assets["robohint.png"];
					hint[3].image = core.assets["robohint.png"];
					hint[4].image = core.assets["robohint.png"];
					hint[5].image = core.assets["robohint.png"];
					hint[6].image = core.assets["robohint.png"];
					hint[7].image = core.assets["robohint.png"];
					hint[8].image = core.assets["robohint.png"];
					if (selectmode == 0) {
						a1.image = core.assets["robo002.png"];
						a2.image = core.assets["robo002.png"];
						a3.image = core.assets["robo002.png"];
						a4.image = core.assets["robo002.png"];
						a5.image = core.assets["robo002.png"];
						a6.image = core.assets["robo002.png"];
						a7.image = core.assets["robo002.png"];
						a8.image = core.assets["robo002.png"];
						a9.image = core.assets["robo002.png"];
					} else {
						a1.image = core.assets["roborobosan.png"];
						a2.image = core.assets["roborobosan.png"];
						a3.image = core.assets["roborobosan.png"];
						a4.image = core.assets["roborobosan.png"];
						a5.image = core.assets["roborobosan.png"];
						a6.image = core.assets["roborobosan.png"];
						a7.image = core.assets["roborobosan.png"];
						a8.image = core.assets["roborobosan.png"];
						a9.image = core.assets["roborobosan.png"];
					}
					if (language) {
						time.image = core.assets["time.png"];
					} else {
						time.image = core.assets["time_en.png"];
					}
					marubatu.image = core.assets["marubatu.png"];
					marubatu.x = core.width / 2 - marubatu.width / 2;
					marubatu.y = core.height / 2 - marubatu.height / 2;
					game.removeChild(marubatu);
					q.color = "blue";
					q.text = "Time: 0";
					q.font = "50px 'Yu Gothic UI'";
					q.removeEventListener("enterframe", texttime);
					rback.removeEventListener("enterframe", robomove);
					game.tl.delay(80 * core.fps).then(function () {
						gamev.stop();
						gamev.play();
					}).loop();
					roboa = rand(roboa);
					game.backgroundColor = "midnightblue";
					core.replaceScene(game);
					aback.frame = 19;
					rback.frame = 15;
					if (selectmode == 0) {
						a1.frame = 15;
						a2.frame = 15;
						a3.frame = 15;
						a4.frame = 15;
						a5.frame = 15;
						a6.frame = 15;
						a7.frame = 15;
						a8.frame = 15;
						a9.frame = 15;
					} else {
						a1.frame = 2;
						a2.frame = 2;
						a3.frame = 2;
						a4.frame = 2;
						a5.frame = 2;
						a6.frame = 2;
						a7.frame = 2;
						a8.frame = 2;
						a9.frame = 2;
					}
					game.addChild(aback);
					game.addChild(rback);
					game.addChild(a1);
					game.addChild(a2);
					game.addChild(a3);
					game.addChild(a4);
					game.addChild(a5);
					game.addChild(a6);
					game.addChild(a7);
					game.addChild(a8);
					game.addChild(a9);
					rback.tl.cue({
						24: function () {
							this.frame = 16;
						},
						48: function () {
							this.frame = 17;
						},
						72: function () {
							if (selectmode != 0) {
								game.addChild(ques[0]);
								game.addChild(ques[1]);
								game.addChild(ques[2]);
								game.addChild(ques[3]);
								game.addChild(ques[4]);
								game.addChild(ques[5]);
								game.addChild(ques[6]);
								game.addChild(ques[7]);
								game.addChild(ques[8]);
							}
							movemode = true;
							gamev.play();
							this.frame = 18;
							var numlist = [7, 10, 16, 24, 30, 37, 48, 49, 55, 53, 72, 75, 83, 81, 96];
							var quis = 0;
							ques.forEach(function (quiz) {
								(function(quizs){
									quiz.tl.scaleTo(0, 0.9, 0).delay(12 + quizs * 3).then(function () {
										if (selectmode == 2) {
											if(Math.round(Math.random())) {
												if(Math.round(Math.random())) {
													var num12 = Math.floor(Math.random() * numlist[roboa[quizs]]);
													var num1 = Math.floor(Math.random() * num12);
													var num2 = num12 - num1;
													var num3 = numlist[roboa[quizs]] - num12;
													this.text = num1 + "+" + num2 + "+" + num3;
												} else {
													var num12 = Math.floor(Math.random() * (99 - numlist[roboa[quizs]]) + numlist[roboa[quizs]]);
													var num1 = Math.floor(Math.random() * num12);
													var num2 = num12 - num1;
													var num3 = num12 - numlist[roboa[quizs]];
													this.text = num1 + "+" + num2 + "-" + num3;
												}
											} else {
												if(Math.round(Math.random())) {
													var num12 = Math.floor(Math.random() * numlist[roboa[quizs]]);
													var num1 = Math.floor(Math.random() * (99 - num12));
													var num2 = num1 - num12;
													var num3 = numlist[roboa[quizs]] - num12;
													this.text = num1 + "-" + num2 + "+" + num3;
												} else {
													var num12 = Math.floor(Math.random() * (99 - numlist[roboa[quizs]]) + numlist[roboa[quizs]]);
													var num1 = Math.floor(Math.random() * (199 - num12) + num12);
													var num2 = num1 - num12;
													var num3 = num12 - numlist[roboa[quizs]];
													this.text = num1 + "-" + num2 + "-" + num3;
												}
											}
										} else {
											if(Math.round(Math.random())) {
												var num1 = Math.floor(Math.random() * numlist[roboa[quizs]]);
												var num2 = numlist[roboa[quizs]] - num1;
												this.text = num1 + "+" + num2;
											} else {
												var num1 = Math.floor(Math.random() * (99 - numlist[roboa[quizs]]));
												var num2 = num1 + numlist[roboa[quizs]];
												this.text = num2 + "-" + num1;
											}
										}
										this.text = this.text.replace("--", "+");
									}).scaleTo(0.9, 0.9, 12);
								})(quis);
								quis++;
							});
							a1.tl.scaleTo(0, 0.9, 12).then(function () {
								if (selectmode != 0) {
									if (selectmode == 1) {
										this.frame = 0;
									} else {
										this.frame = 1;
									}
								} else {
									this.frame = roboa[0];
								}
							}).scaleTo(0.9, 0.9, 12);
							a2.tl.delay(3).scaleTo(0, 0.9, 12).then(function () {
								if (selectmode != 0) {
									if (selectmode == 1) {
										this.frame = 0;
									} else {
										this.frame = 1;
									}
								} else {
									this.frame = roboa[1];
								}
							}).scaleTo(0.9, 0.9, 12);
							a3.tl.delay(6).scaleTo(0, 0.9, 12).then(function () {
								if (selectmode != 0) {
									if (selectmode == 1) {
										this.frame = 0;
									} else {
										this.frame = 1;
									}
								} else {
									this.frame = roboa[2];
								}
							}).scaleTo(0.9, 0.9, 12);
							a4.tl.delay(9).scaleTo(0, 0.9, 12).then(function () {
								if (selectmode != 0) {
									if (selectmode == 1) {
										this.frame = 0;
									} else {
										this.frame = 1;
									}
								} else {
									this.frame = roboa[3];
								}
							}).scaleTo(0.9, 0.9, 12);
							a5.tl.delay(12).scaleTo(0, 0.9, 12).then(function () {
								if (selectmode != 0) {
									if (selectmode == 1) {
										this.frame = 0;
									} else {
										this.frame = 1;
									}
								} else {
									this.frame = roboa[4];
								}
							}).scaleTo(0.9, 0.9, 12);
							a6.tl.delay(15).scaleTo(0, 0.9, 12).then(function () {
								if (selectmode != 0) {
									if (selectmode == 1) {
										this.frame = 0;
									} else {
										this.frame = 1;
									}
								} else {
									this.frame = roboa[5];
								}
							}).scaleTo(0.9, 0.9, 12);
							a7.tl.delay(18).scaleTo(0, 0.9, 12).then(function () {
								if (selectmode != 0) {
									if (selectmode == 1) {
										this.frame = 0;
									} else {
										this.frame = 1;
									}
								} else {
									this.frame = roboa[6];
								}
							}).scaleTo(0.9, 0.9, 12);
							a8.tl.delay(21).scaleTo(0, 0.9, 12).then(function () {
								if (selectmode != 0) {
									if (selectmode == 1) {
										this.frame = 0;
									} else {
										this.frame = 1;
									}
								} else {
									this.frame = roboa[7];
								}
							}).scaleTo(0.9, 0.9, 12);
							a9.tl.delay(24).scaleTo(0, 0.9, 12).then(function () {
								if (selectmode != 0) {
									if (selectmode == 1) {
										this.frame = 0;
									} else {
										this.frame = 1;
									}
								} else {
									this.frame = roboa[8];
								}
							}).scaleTo(0.9, 0.9, 12);
							hint[0].frame = roboa[0];
							hint[1].frame = roboa[1];
							hint[2].frame = roboa[2];
							hint[3].frame = roboa[3];
							hint[4].frame = roboa[4];
							hint[5].frame = roboa[5];
							hint[6].frame = roboa[6];
							hint[7].frame = roboa[7];
							hint[8].frame = roboa[8];
							ssf = core.frame;
							q.on("enterframe", texttime);
						},
						96: function () {
							this.on("enterframe", robomove);
						}
					});
				}
				var t = 0;
				function robomove() {
					if(t == 8) {
						rback.frame = Math.floor(Math.random() * 15);
						t = 0;
					}
					t++;
				}
				var nowtext = 0;
				function texttime () {
					nowtext = ((core.frame - ssf) / core.fps).toFixed(1);
					this.text = "Time: " + nowtext;
				}
				function clearScene() {
					clearv.play();
					age = Math.floor(nowtext * 10) / 10;
					kanseiback.x = 0;
					kanseiback.y = 0;
					kanseiback.image = core.assets["kanseiback.png"];
					kanseimoji.x = 0;
					kanseimoji.y = 0;
					if (language) {
						kanseimoji.image = core.assets["kanseiback3.png"];
					} else {
						kanseimoji.image = core.assets["kanseiback3_en.png"];
					}
					banzai.x = 0;
					banzai.y = 0;
					banzai.image = core.assets["kanseibanzai.png"];
					banzai.tl.delay(24).then(function () {
						this.frame = this.frame % 2 + 1;
					}).loop();
					r.x = 620;
					r.y = 565;
					r.text = "TIME " + toms(age);
					r.color = "navy";
					r.font = "60px Arial";
					clscene.addChild(kanseiback);
					clscene.addChild(banzai);
					clscene.addChild(kanseimoji);
					clscene.addChild(r);
					core.replaceScene(clscene);
					clscene.tl.delay(58 * core.fps).then(function () {
						clearv.stop();
						clearv.play();
					}).loop();
				}
				function nameScene() {
					if (language) kanseiback.image = core.assets["kanseiback2.png"];
					else kanseiback.image = core.assets["kanseiback2_en.png"];
					waku.x = 190;
					waku.y = 60;
					waku.image = core.assets["waku.png"];
					namearea.x = 235;
					namearea.y = 676;
					namearea.width = 1000;
					namearea.color = "navy";
					namearea.font = "146px 'OCRB'";
					namearea.scaleY = 0.8;
					namearea.text = "";
					nmscene.addChild(kanseiback);
					nmscene.addChild(waku);
					nmscene.addChild(namearea);
					core.replaceScene(nmscene);
				}
				function junniScene(username) {
					if (readCookie("JUNNI" + selectmode) !== undefined && readCookie("JUNNI" + selectmode) !== null) {
						junni[selectmode] = JSON.parse(readCookie("JUNNI" + selectmode));
					} else {
						document.cookie = "JUNNI" + selectmode + "=" + JSON.stringify([{name: "TEST", score: 10000}]);
						junni[selectmode] = [];
					}
					jnscene.addChild(back);
					back.y = -core.height;
					back.tl.moveY(0, 24);
					if (language) kanseimoji.image = core.assets["ranking.png"];
					else kanseimoji.image = core.assets["ranking_en.png"];
					kanseimoji.frame = selectmode;
					jnscene.addChild(kanseimoji);
					junni[selectmode][junni[selectmode].length] = {
						name: username,
						score: age
					};
					var newjunni = junni[selectmode].sort(function (a, b) {
						return a.score - b.score;
					});
					document.cookie = "JUNNI" + selectmode + "=" + JSON.stringify(newjunni);
					var ranking = [new Label(), new Label(), new Label(), new Label(), new Label(),
						new Label(), new Label(), new Label(), new Label(), new Label()];
					var ranktime = [new Label(), new Label(), new Label(), new Label(), new Label(),
						new Label(), new Label(), new Label(), new Label(), new Label()];
					var you = new Label();
					var yourrank = new Label();
					var yourscore = new Label();
					var rankca = new Sprite(500, 500);
					ranking[0].x = 1010;
					ranking[1].x = 1010;
					ranking[2].x = 1010;
					ranking[3].x = 1010;
					ranking[4].x = 1010;
					ranking[5].x = 1010;
					ranking[6].x = 1010;
					ranking[7].x = 1010;
					ranking[8].x = 1010;
					ranking[9].x = 1010;
					ranking[0].y = 120;
					ranking[1].y = ranking[0].y + 65;
					ranking[2].y = ranking[1].y + 65;
					ranking[3].y = ranking[2].y + 65;
					ranking[4].y = ranking[3].y + 65;
					ranking[5].y = ranking[4].y + 65;
					ranking[6].y = ranking[5].y + 65;
					ranking[7].y = ranking[6].y + 65;
					ranking[8].y = ranking[7].y + 65;
					ranking[9].y = ranking[8].y + 65;
					ranktime[0].x = 1260;
					ranktime[1].x = 1260;
					ranktime[2].x = 1260;
					ranktime[3].x = 1260;
					ranktime[4].x = 1260;
					ranktime[5].x = 1260;
					ranktime[6].x = 1260;
					ranktime[7].x = 1260;
					ranktime[8].x = 1260;
					ranktime[9].x = 1260;
					ranktime[0].y = 120;
					ranktime[1].y = ranktime[0].y + 65;
					ranktime[2].y = ranktime[1].y + 65;
					ranktime[3].y = ranktime[2].y + 65;
					ranktime[4].y = ranktime[3].y + 65;
					ranktime[5].y = ranktime[4].y + 65;
					ranktime[6].y = ranktime[5].y + 65;
					ranktime[7].y = ranktime[6].y + 65;
					ranktime[8].y = ranktime[7].y + 65;
					ranktime[9].y = ranktime[8].y + 65;
					ranking[0].font = "55px 'OCRB'";
					ranking[1].font = "55px 'OCRB'";
					ranking[2].font = "55px 'OCRB'";
					ranking[3].font = "55px 'OCRB'";
					ranking[4].font = "55px 'OCRB'";
					ranking[5].font = "55px 'OCRB'";
					ranking[6].font = "55px 'OCRB'";
					ranking[7].font = "55px 'OCRB'";
					ranking[8].font = "55px 'OCRB'";
					ranking[9].font = "55px 'OCRB'";
					ranktime[0].font = "55px 'OCRB'";
					ranktime[1].font = "55px 'OCRB'";
					ranktime[2].font = "55px 'OCRB'";
					ranktime[3].font = "55px 'OCRB'";
					ranktime[4].font = "55px 'OCRB'";
					ranktime[5].font = "55px 'OCRB'";
					ranktime[6].font = "55px 'OCRB'";
					ranktime[7].font = "55px 'OCRB'";
					ranktime[8].font = "55px 'OCRB'";
					ranktime[9].font = "55px 'OCRB'";
					ranking[0].color = "navy";
					ranking[1].color = "navy";
					ranking[2].color = "navy";
					ranking[3].color = "navy";
					ranking[4].color = "navy";
					ranking[5].color = "navy";
					ranking[6].color = "navy";
					ranking[7].color = "navy";
					ranking[8].color = "navy";
					ranking[9].color = "navy";
					ranktime[0].color = "navy";
					ranktime[1].color = "navy";
					ranktime[2].color = "navy";
					ranktime[3].color = "navy";
					ranktime[4].color = "navy";
					ranktime[5].color = "navy";
					ranktime[6].color = "navy";
					ranktime[7].color = "navy";
					ranktime[8].color = "navy";
					ranktime[9].color = "navy";
					ranking[0].text = newjunni[0].name;
					ranktime[0].text = toms(newjunni[0].score);
					if (newjunni[1] !== undefined) {
						ranking[1].text = newjunni[1].name;
						ranktime[1].text = toms(newjunni[1].score);
					}
					if (newjunni[2] !== undefined) {
						ranking[2].text = newjunni[2].name;
						ranktime[2].text = toms(newjunni[2].score);
					}
					if (newjunni[3] !== undefined) {
						ranking[3].text = newjunni[3].name;
						ranktime[3].text = toms(newjunni[3].score);
					}
					if (newjunni[4] !== undefined) {
						ranking[4].text = newjunni[4].name;
						ranktime[4].text = toms(newjunni[4].score);
					}
					if (newjunni[5] !== undefined) {
						ranking[5].text = newjunni[5].name;
						ranktime[5].text = toms(newjunni[5].score);
					}
					if (newjunni[6] !== undefined) {
						ranking[6].text = newjunni[6].name;
						ranktime[6].text = toms(newjunni[6].score);
					}
					if (newjunni[7] !== undefined) {
						ranking[7].text = newjunni[7].name;
						ranktime[7].text = toms(newjunni[7].score);
					}
					if (newjunni[8] !== undefined) {
						ranking[8].text = newjunni[8].name;
						ranktime[8].text = toms(newjunni[8].score);
					}
					if (newjunni[9] !== undefined) {
						ranking[9].text = newjunni[9].name;
						ranktime[9].text = toms(newjunni[9].score);
					}
					rankca.x = 340;
					rankca.y = 50;
					rankca.image = core.assets["rankca.png"];
					rankca.frame = r5.frame;
					rankca.tl
					.delay(16).then(function () {
						rankca.frame = rankca.frame + 15 % 30;
					}).loop();
					you.x = 380;
					you.y = 600;
					you.width = 600;
					you.color = "azure";
					you.font = "60px Arial";
					you.text = username;
					yourscore.x = 400;
					yourscore.y = 695;
					yourrank.x = 450;
					yourrank.y = 695;
					yourrank.color = "azure";
					yourrank.font = "60px Arial";
					yourscore.color = "azure";
					yourscore.font = "60px Arial";
					yourrank.textAlign = "right";
					var t = 0;
					for (var index = 0; index < newjunni.length; index++) {
						if (newjunni[index].name == username && newjunni[index].score == age) {
							t = index;
						}
					}
					yourrank.text = t + 1;
					yourscore.text = r.text.substr(5);
					jnscene.addChild(ranking[0]);
					jnscene.addChild(ranking[1]);
					jnscene.addChild(ranking[2]);
					jnscene.addChild(ranking[3]);
					jnscene.addChild(ranking[4]);
					jnscene.addChild(ranking[5]);
					jnscene.addChild(ranking[6]);
					jnscene.addChild(ranking[7]);
					jnscene.addChild(ranking[8]);
					jnscene.addChild(ranking[9]);
					jnscene.addChild(ranktime[0]);
					jnscene.addChild(ranktime[1]);
					jnscene.addChild(ranktime[2]);
					jnscene.addChild(ranktime[3]);
					jnscene.addChild(ranktime[4]);
					jnscene.addChild(ranktime[5]);
					jnscene.addChild(ranktime[6]);
					jnscene.addChild(ranktime[7]);
					jnscene.addChild(ranktime[8]);
					jnscene.addChild(ranktime[9]);
					jnscene.addChild(rankca);
					jnscene.addChild(you);
					jnscene.addChild(yourrank);
					jnscene.addChild(yourscore);
					core.replaceScene(jnscene);
				}
				init();
			};
			core.start();
		}
	});
};
function toTheNumber(array) {
	var x = 0;
	if (array[0]) {
		x++;
	}
	if (array[1]) {
		x+=2;
	}
	if (array[2]) {
		x+=4;
	}
	if (array[3]) {
		x+=8;
	}
	return x;
}
function rand() {
    var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    for(var i = a.length - 1; i > 0; i--){
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[r];
        a[r] = tmp;
	}
    return a;
}
function toms (s) {
	var m = Math.floor(s / 60).toString();
	if (m.length == 1) {
		m = "0" + m;
	}
	var s = Math.floor(s % 60).toString();
	if (s.length == 1) {
		s = "0" + s;
	}
	return m + ":" + s;
}