---
layout: post
title:  "Git Cheatsheet"
author: Denis Kobare
date:   2020-06-09 17:07:06 +0300
img: https://drive.google.com/uc?id=1JXnK4HNIJivvw_BuzpMZXKprxALKKNx3
categories: versioning
sub_category: github
type: tutorials
technology: Github/Git
permalink: "category/:categories/github/cheatsheet/:year:month/:title"

---


Git is used as a version control system. If you don't already have a Github account, [register](https://github.com/){:target="_blank"} one.


<div class="window">
  <div class="terminal">
    <h4># List SSH keys on your machine</h4>
    <p class="command">ls -al ~/.ssh</p>

    <h4># Switching remote URL from SSH to HTTPS</h4>
    <p class="command">git remote set-url origin https://github.com/USERNAME/REPOSITORY.git</p>

    <h4># Switching remote URL from HTTPS to SSH</h4>
    <p class="command">git remote set-url origin git@github.com:USERNAME/REPOSITORY.git</p>

    <h4># Create a new branch</h4>
    <p class="command">git checkout -b your_branch_name</p>
    
    <h4># List available branches</h4>
    <p class="command">git branch</p>

    <h4># Navigate to a branch</h4>
    <p class="command">git checkout your_branch_name</p>

    <h4># Check Git status</h4>
    <p class="command">git status</p>
    
  </div>
</div>
<br>


That's it!

*See you in the next tuts*


