---
layout: post
title:  "Build a Simple Django Blog App"
author: Denis Kobare
date:   2021-01-24 16:15:00 +0300
img: /assets/img/django_03.jpg
categories: frameworks
sub_category: django
type: tutorials
technology: python/django
tutorial_type: How To
permalink: "category/:categories/django/tutorials/:year:month/:title"
tags:
- python
- django
- tutorial
- crud
---


This tutorial will focus on how to create a standard Django CRUD project.

  <table class="table table-bordered">
    <thead>
      <tr>
        <th colspan="5" style="text-align: center;">This tutrial will cover the following:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
       <td>1. URLs</td>
      </tr>
      <tr>
       <td>2. Templates</td>
      </tr>
      <tr>
       <td>3. Views</td>
      </tr>
      <tr>
       <td>4. Models</td>
      </tr>
      <tr>
       <td>5. Django Admin</td>
      </tr>
      
    </tbody>
  </table><br>


If you haven't installed and configured virtual environment and the virtualenvwrapper on your machine, I have a tutorial that will show you how to. Click [here]({{site.baseurl}}/category/programming/python/setup-and-configurations/202101/how-to-install-python-3-and-set-up-a-local-programming-environment-on-ubuntu-20.04){:target="_blank"} to read it.

### 1. Create a Virtual Environment 
<section class="terminal-container terminal-fixed-top">
cd into your projects directory and pass the following command to create and activate a new virtual environment named my_website
<br><br>
<header class="terminal">
<span class="button red"></span>
<span class="button yellow"></span>
<span class="button green"></span>
user@local_machine
</header>

<div class="terminal-home">
<p class="console">mkvirtualenv my_website</p>
</div>
</section>

<br><br>
 

### 2. Install the latest version of Django
<section class="terminal-container terminal-fixed-top">
<header class="terminal">
<span class="button red"></span>
<span class="button yellow"></span>
<span class="button green"></span>
user@local_machine
</header>

<div class="terminal-home">
<p class="console">pip install django</p>
 <h6 class="hashed">Verify and check the version installed</h6>
<p class="console">django-admin --version </p>
</div>
</section><br><br><br>


### 3. Create the Django Project
<section class="terminal-container terminal-fixed-top">
<header class="terminal">
<span class="button red"></span>
<span class="button yellow"></span>
<span class="button green"></span>
user@local_machine
</header>

<div class="terminal-home">
 <p class="console">django-admin startproject my_website</p>
 <h6 class="hashed"># cd into the project: </h6>
 <p class="console">cd my_website</p>
 <h6 class="hashed">Run the development server to make sure everything is ok so far</h6>
 <p class="console">python manage.py runserver</p>
</div>
</section><br>


Now if you navigate to [http://localhost:8000/](http://localhost:8000/){:target="_blank"} on your browser and you should see something like this:

<img srcset="
  {{site.baseurl}}/assets/img/django_project_page.png 1.5x,
  {{site.baseurl}}/assets/img/django_project_page.png 3.5x
" alt="missing image">
<br><br>

    Now close the development server with Ctrl + C 

### 4. Create a Django App
A django project can have multiple apps in it. For example, you can have an ecommerce app and a blog app within one project. With this approach, Django allows you to manage the apps independently and you can easily move your apps into other projects if need be. 
<section class="terminal-container terminal-fixed-top">
<header class="terminal">
<span class="button red"></span>
<span class="button yellow"></span>
<span class="button green"></span>
user@local_machine
</header>

<div class="terminal-home">
 <p class="console">python manage.py startapp blog</p>
</div>
</section><br><br><br>


Open the settings.py file and specify the allowed hosts as well as add the blog app to installed apps. You should have something similar to this:
<img srcset="
  {{site.baseurl}}/assets/img/blog_app_settings.png 1x,
  {{site.baseurl}}/assets/img/blog_app_settings.png 2x
" alt="missing image">
<br><br>


At this point, the project tree should resemble this:
<img srcset="
  {{site.baseurl}}/assets/img/blog_app_tree.png 1x,
  {{site.baseurl}}/assets/img/blog_app_tree.png 2x
" alt="missing image">
<br><br>


### 6. Create a Templates Directory
If you are familiar with Ruby on Rails, Templates in Django are the equivalent of Views in Rails. Basically, this is where the HTML files go. Open the blog directory and create a directory called templates.


### 7. Create a Blog Sub-Directory
Within the templates directory, create a sub-directory called blog. For every app in your project, you must create a sub-directory within the templates directory with the same name as your app. For instance, if we created another app in our project called ecommerce, we would then create a sub-directory inside templates directory called ecommerce.


<section class="terminal-container terminal-fixed-top">
<header class="terminal">
<span class="button red"></span>
<span class="button yellow"></span>
<span class="button green"></span>
user@local_machine
</header>

<div class="terminal-home">
 <h6 class="hashed">#Install venv</h6>
 <p class="console">sudo apt install -y python3-venv</p>
 <h6 class="hashed">#Create a directory called environments or any other name</h6>
 <p class="console">mkdir environments</p>
 <h6 class="hashed">#Navigate into the directory</h6>
 <p class="console">cd environments</p>
 <h6 class="hashed">#Create an environment directory. Replace "my_env" with the name you prefer</h6>
 <p class="console">python3 -m venv my_env</p>
  
</div>
</section><br><br><br>


### 6. Activate Your Environment 
You need to activate the envirinment to use it 
<section class="terminal-container terminal-fixed-top">
<header class="terminal">
<span class="button red"></span>
<span class="button yellow"></span>
<span class="button green"></span>
user@local_machine
</header>

<div class="terminal-home">
 <h6 class="hashed">#call the activate script</h6>
 <p class="console">source my_env/bin/activate</p>
 <h6 class="hashed">#NB: Within the virtual environment, you can use the command python instead of python3, and pip instead of pip3</h6> 
</div>
</section><br><br><br>


With that, the environment is ready to use!<br><br>

### 6. Create a Simple Text Game and Play 

<section class="terminal-container terminal-fixed-top">
<header class="terminal">
<span class="button red"></span>
<span class="button yellow"></span>
<span class="button green"></span>
user@local_machine
</header>

<div class="terminal-home">
 <h6 class="hashed">#Create a file</h6>
 <p class="console">gedit text_game.py</p>
</div>
</section><br><br><br>



Copy the code below and save it in that file.
<button onclick="copyCodeToClipboard()" class="btn btn-warning btn-sm float-right">Copy</button>
<div id="output"></div>
 
{% highlight python linenos%}

import time #Imports a module to add a pause

#Figuring out how users might respond
answer_A = ["A", "a"]
answer_B = ["B", "b"]
answer_C = ["C", "c"]
yes = ["Y", "y", "yes"]
no = ["N", "n", "no"]

#Grabbing objects
sword = 0
flower = 0

required = ("\nUse only A, B, or C\n") #Cutting down on duplication

#The story is broken into sections, starting with "intro"
def intro():
  print ("After a drunken night out with friends, you awaken the "
  "next morning in a thick, dank forest. Head spinning and " 
  "fighting the urge to vomit, you stand and marvel at your new, "
  "unfamiliar setting. The peace quickly fades when you hear a "
  "grotesque sound emitting behind you. A slobbering orc is "
  "running towards you. You will:")
  time.sleep(1)
  print ("""  A. Grab a nearby rock and throw it at the orc
  B. Lie down and wait to be mauled
  C. Run""")
  choice = input(">>> ") #Here is your first choice.
  if choice in answer_A:
    option_rock()
  elif choice in answer_B:
    print ("\nWelp, that was quick. "
    "\n\nYou died!")
  elif choice in answer_C:
    option_run()
  else:
    print (required)
    intro()

def option_rock(): 
  print ("\nThe orc is stunned, but regains control. He begins "
  "running towards you again. Will you:")
  time.sleep(1)
  print ("""  A. Run
  B. Throw another rock
  C. Run towards a nearby cave""")
  choice = input(">>> ")
  if choice in answer_A:
    option_run()
  elif choice in answer_B:
    print ("\nYou decided to throw another rock, as if the first " 
    "rock thrown did much damage. The rock flew well over the "
    "orcs head. You missed. \n\nYou died!")
  elif choice in answer_C:
    option_cave()
  else:
    print (required)
    option_rock()

def option_cave():
  print ("\nYou were hesitant, since the cave was dark and "
  "ominous. Before you fully enter, you notice a shiny sword on "
  "the ground. Do you pick up a sword. Y/N?")
  choice = input(">>> ")
  if choice in yes:
    sword = 1 #adds a sword
  else:
    sword = 0
  print ("\nWhat do you do next?")
  time.sleep(1)
  print ("""  A. Hide in silence
  B. Fight
  C. Run""")
  choice = input(">>> ")
  if choice in answer_A:
    print ("\nReally? You're going to hide in the dark? I think "
    "orcs can see very well in the dark, right? Not sure, but "
    "I'm going with YES, so...\n\nYou died!")
  elif choice in answer_B:
   if sword > 0:
    print ("\nYou laid in wait. The shimmering sword attracted "
    "the orc, which thought you were no match. As he walked "
    "closer and closer, your heart beat rapidly. As the orc "
    "reached out to grab the sword, you pierced the blade into "
    "its chest. \n\nYou survived!")
   else: #If the user didn't grab the sword
     print ("\nYou should have picked up that sword. You're "
     "defenseless. \n\nYou died!")
  elif choice in answer_C:
    print ("As the orc enters the dark cave, you sliently "
    "sneak out. You're several feet away, but the orc turns "
    "around and sees you running.")
    option_run()
  else:
    print (required)
    option_cave()

def option_run():
  print ("\nYou run as quickly as possible, but the orc's "
  "speed is too great. You will:")
  time.sleep(1)
  print ("""  A. Hide behind boulder
  B. Trapped, so you fight
  C. Run towards an abandoned town""")
  choice = input(">>> ")
  if choice in answer_A:
    print ("You're easily spotted. "
    "\n\nYou died!")
  elif choice in answer_B:
    print ("\nYou're no match for an orc. "
    "\n\nYou died!")
  elif choice in answer_C:
    option_town()
  else:
    print (required)
    option_run()
    
def option_town():
  print ("\nWhile frantically running, you notice a rusted "
  "sword lying in the mud. You quickly reach down and grab it, "
  "but miss. You try to calm your heavy breathing as you hide "
  "behind a delapitated building, waiting for the orc to come "
  "charging around the corner. You notice a purple flower "
  "near your foot. Do you pick it up? Y/N")
  choice = input(">>> ")
  if choice in yes:
    flower = 1 #adds a flower
  else:
    flower = 0
  print ("You hear its heavy footsteps and ready yourself for "
  "the impending orc.")
  time.sleep(1)
  if flower > 0:
    print ("\nYou quickly hold out the purple flower, somehow "
    "hoping it will stop the orc. It does! The orc was looking "
    "for love. "
    "\n\nThis got weird, but you survived!")
  else: #If the user didn't grab the sword
     print ("\nMaybe you should have picked up the flower. "
     "\n\nYou died!")

intro()

{% endhighlight %}
<br><br>


### 7. Run the Game and Enjoy
<section class="terminal-container terminal-fixed-top">
<header class="terminal">
<span class="button red"></span>
<span class="button yellow"></span>
<span class="button green"></span>
user@local_machine
</header>

<div class="terminal-home">
<p class="console">python text_game.py</p>
</div>
</section><br><br><br>


That's it! You have successfully set up, configured and tested python.

*See you in the next tuts*

