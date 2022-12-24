
            class Player{
                constructor(){
                    var heightmain = document.getElementById("player");
                    heightmain.style.height = window.screen.height + "px";
                    
                    if(window.screen.width < 620){
                        heightmain.style.width = window.screen.width + "px";
                        
                    }
                    var heightdive = document.getElementById("content");
                    heightdive.style.height = window.screen.height-270 + "px";
                    
                }
                

                
            }

            onload= new Player();


            // class buttons 

            class Audio_Player{
                
                constructor(){
                    
                    this.audio_file = document.getElementById("audios-file"); //audio
                    this.titleaudio = document.getElementById("title_radio"); //title
                    this.play_pause_button = document.getElementById("play_pause"); //img pause
                    this.isplayed = false ;
                    
                    this.play_pause_button.addEventListener("click", () =>{
                        
                        this.play_pause();
                        
                    });
                    
                    
                    this.namesradios = [];
                    this.namesradios[0] = "Nasif-Zeytoun";
                    this.namesradios[1] = "Nancy-Ajram";
                    this.namesradios[2] = "Wael-Jassar";
                    
                    this.sourceaudio = []
                    this.sourceaudio[0] = "https://mp3songs.alarab.com/data/mp3_files//N/nasef%20zayton/Toul-Elyoum/Alarab_Nassif-Zeytoun_Shou-Helo.mp3";
                    this.sourceaudio[1] = "https://mp3songs.alarab.com/data/mp3_files//N/Nancy%20Aajram/Nancy%20Ajram%20-%20Albi%20Ya%20Albi.mp3";
                    this.sourceaudio[2] = "https://mp3songs.alarab.com/data/mp3_files///W/Wael%20Gassar/Alarab_Wael-Jassar_Ghariba-Elnas.mp3";
                    this.server= 0;
                    this.setResource();
                    
                    this.play_back = document.getElementById("play_back"); //img pause
                    this.play_next = document.getElementById("play_next"); //img pause
                    
                    this.play_next.addEventListener("click", () =>{
                        
                        if( this.server < this.sourceaudio.length-1){
                            ++this.server;
                            this.isplayed = false;
                        }
                        else{
                            
                            this.server= 0;
                        }
                        localStorage.setItem("save-position", this.server);
                        
                        this.setResource();
                        
                    });
                    
                    
                    
                    this.play_back.addEventListener("click", () =>{
                        
                        if( this.server > 0){
                            --this.server;
                            this.isplayed = false;
                        }
                        else{
                            
                            this.server= this.sourceaudio.length-1;
                            
                        }
                        
                        localStorage.setItem("save-position", this.server);
                        
                        this.setResource();
                        
                    });
                    
                    
                    
                    
                    
                }
                
                setResource(){
                    if(localStorage.getItem("save-position")!=null){
                        this.server= localStorage.getItem("save-position");
                    
                    }
                    this.audio_file.src = this.sourceaudio[this.server];
                    this.titleaudio.innerHTML=this.namesradios[this.server];
                    this.play_pause();
                }
                
                
                play_pause(){
                    if(this.isplayed == false){
                        this.audio_file.play();
                        this.isplayed =true;
                        this.play_pause_button.src=" https://tse2.mm.bing.net/th?id=OIP.7oqs_qjyWIXMfUUd9tIi1gHaHw&pid=Api&P=0&w=159&h=166 ";

                        
                    } else {
                            this.audio_file.pause();
                            this.isplayed =false;
                            this.play_pause_button.src=" https://tse3.mm.bing.net/th?id=OIP.U4K4EaL7UWahJdXpNoVpJAHaHa&pid=Api&P=0&w=169&h=169";

                        
                        
                    }
                    
                    
                }
                
            }

            onload=new Audio_Player();




            class Volume{
                constructor(){
                    this.audio_file2 = document.getElementById("audios-file"); //audio
                    this.audio_file2.volume = 50/100;
                    this.volume_range =document.getElementById("voicee");
                    this.volume_range.addEventListener("change", () =>{
                        
                        this.audio_file2.volume =  this.volume_range.value/100;
                        
                    });
                    
                    
                    this.speed_range =document.getElementById("speed");
                    this.audio_file2.playbackRate = 1;
                    
                    this.speed_range.addEventListener("change", () =>{
                        
                        this.audio_file2.playbackRate =  this.speed_range.value/100;
                        
                    });
                    
                    
                    
                    
                    
                        
                    
                    
                }
                
                
            }

            onload = new Volume();















            class Colors{
                constructor(){
                    this.c1 = document.getElementById("c1");
                    this.c2 = document.getElementById("c2");
                    this.c3 = document.getElementById("c3");
                    this.c4 = document.getElementById("c4");
                    this.mainplayer = document.getElementById("player");
                    
                    this.c1.addEventListener("click", () =>{
                    
                        this.selectcolor("c1");
                    });
                    
                    this.c2.addEventListener("click", () =>{
                    
                        this.selectcolor("c2");
                    });
                    
                    this.c3.addEventListener("click", () =>{
                    
                        this.selectcolor("c3");
                    });
                    
                    this.c4.addEventListener("click", () =>{
                    
                        this.selectcolor("c4");
                    });
                    
                    /*
                    
                    if(localStorage.getItem("COLOR")==null){
                        
                        document.body.style.background ="white";
                    }
                    
                    this.selectcolor(localStorage.getItem("COLOR"));  */
                
                }
                
                selectcolor(color){
                    
                    if(color=="c1"){
                        
                        document.body.style.background ="rgba(39,39,37,1)";
                        this.mainplayer.style.background ="rgba(39,39,37,1)";
                    }
                    
                    else if(color=="c2"){
                        
                        document.body.style.background ="rgb(231 27 225 )";
                        this.mainplayer.style.background ="rgb(231 27 225 )";
                    }
                    
                    else if(color=="c3"){
                        
                        document.body.style.background ="rgb(27 133 93)";
                        this.mainplayer.style.background ="rgb(27 133 93)";
                    }
                    
                    else if(color=="c4"){
                        
                        document.body.style.background ="rgb(50 48 163)";
                        this.mainplayer.style.background ="rgb(50 48 163)";
                    }
                    
                    localStorage.setItem("COLOR",color);
                    
                }
                
                
                
                
                
            }

            onload = new Colors();














