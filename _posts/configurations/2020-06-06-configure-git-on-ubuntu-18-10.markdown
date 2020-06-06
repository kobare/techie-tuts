---
layout: post
title:  "Configure Git on Ubuntu 18.10 Cosmic Canimal"
date:   2020-06-06 14:17:06 +0300
img: ionic_side_menu.png
categories: configurations
technology: Github/Git
tutorial_type: How To
---
<style>
.window {
  border-radius: 3px;
  background: #222;
  color: #fff;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  width: auto;

}
.window:before {
  content: " ";
  display: block;
  height: 48px;
  background: #c6c6c6;
}
.window:after {
  content: ". . .";
  position: absolute;
  left: 12px;
  right: 0;
  top: -3px;
  font-family: "Times New Roman", Times, serif;
  font-size: 96px;
  color: #fff;
  line-height: 0;
  letter-spacing: -12px;
}

.terminal {
  margin: 20px;
  font-family: monospace;
  font-size: 16px;
  color: #22da26;
}
.terminal .command {
  width: 0%;
  white-space: wrap;
  overflow: hidden;
  animation: write-command 5s both;
}
.terminal .command:before {
  content: "$ ";
  color: #22da26;
}
.terminal .log {
  white-space: nowrap;
  overflow: hidden;
  /* animation: write-log 5s both; */
}
.terminal p:nth-child(2) {
  /* animation-delay: 2s; */
}
.terminal p:nth-child(3) {
  /* animation-delay: 8s; */
}

@keyframes write-command {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes write-log {
  0% {
    height: 0;
  }
  16% {
    height: 0;
  }
  17% {
    height: 18px;
  }
  33% {
    height: 18px;
  }
  34% {
    height: 37px;
  }
  51% {
    height: 37px;
  }
  52% {
    height: 55px;
  }
  69% {
    height: 55px;
  }
  70% {
    height: 74px;
  }
  87% {
    height: 74px;
  }
  88% {
    height: 92px;
  }
  88% {
    height: 92px;
  }
  99% {
    height: 92px;
  }
  100% {
    height: 110px;
  }
}


</style>

<div align="center" style="background-color:#B22222"> 
<img srcset="
  https://drive.google.com/uc?id=1JXnK4HNIJivvw_BuzpMZXKprxALKKNx3 3x,
  https://drive.google.com/uc?id=1JXnK4HNIJivvw_BuzpMZXKprxALKKNx3 6x
" alt="missing image">
</div>
<br>

Git is used as a version control system. In this tutorial we are going to set it up to match our Github account. If you don't already have a Github account, [register](https://github.com/){:target="_blank"} one.


`Ubuntu version: 18.10`

<h4 align="center" >STEP 1: <h5 align="center" >Account Configuration</h5></h4>

<div class="window">
  <div class="terminal">
    <h4># Replace my name and email address in the following steps with the ones you used for your Github account.</h4>
    <p class="command">git config --global color.ui true</p>

    <p class="command">git config --global user.name "YOUR NAME"</p>

    <p class="command">git config --global user.email "YOUR@EMAIL.com"</p>

    <h4># Generate SSH key</h4>
    <p class="command">ssh-keygen -t rsa -b 4096 -C "YOUR@EMAIL.com"</p>
  </div>
</div>
<br>

<h4 align="center" >STEP 2: <h5 align="center" >Copy the generated SSH key and add it to your Github account</h5></h4>

<div class="window">
  <div class="terminal">
    <h4># Copy SSH key. This command copies your SSH key.</h4>
    <p class="command">cat ~/.ssh/id_rsa.pub</p>
  </div>
</div>
<br>

Paste the output of the above command [here](https://github.com/settings/ssh){:target="_blank"} . 

<h4 align="center" >STEP 3: <h5 align="center" >Verify it Worked</h5></h4>

<div class="window">
  <div class="terminal">
    <p class="command">ssh -T git@github.com</p>

<h4>You should get a message like this:</h4>
<p class="log">
      <span>
        Hi user_name! You've successfully authenticated but GitHub does not provide shell access.
      </span>
    </p>
  </div>
</div>
<br>


That it's!

*See you on the next tuts*


