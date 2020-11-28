---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---


<!-- Feature post -->
<section class="bg0">
<div class="container">
<div class="row m-rl--1">
<div class="col-md-6 p-rl-1 p-b-2">
<div class="bg-img1 size-a-3 how1 pos-relative" style="background-image: url(/assets/img/ruby-01.jpg);">
<button class="s-full ab-t-l flex-c-c fs-32 cl0 hov-cl10 trans-03" data-toggle="modal" data-target="#modal-video-01">
<span class="fab fa-youtube"></span>
</button>
<div class="flex-col-e-s s-full p-rl-25 p-tb-20">
<a href="" class="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
Ruby
</a>

<h3 class="how1-child2 m-t-14 m-b-10">
<a href="" class="how-txt1 size-a-6 f1-l-1 cl0 hov-cl10 trans-03">
How to use Dependency Injection in Ruby
</a>
</h3>

<span class="how1-child2">
<span class="f1-s-4 cl11">
 GoRails
</span>

<span class="f1-s-3 cl11 m-rl-3">
-
</span>

<span class="f1-s-3 cl11">
Jan 8, 2020
</span>
</span>
</div>
</div>
</div>

<div class="col-md-6 p-rl-1">
<div class="row m-rl--1">
<div class="col-12 p-rl-1 p-b-2">
<div class="bg-img1 size-a-4 how1 pos-relative" style="background-image: url(/assets/img/javascript_01.jpg);">
<button class="s-full ab-t-l flex-c-c fs-32 cl0 hov-cl10 trans-03" data-toggle="modal" data-target="#modal-video-02">
<span class="fab fa-youtube"></span>
</button>


<div class="flex-col-e-s s-full p-rl-25 p-tb-24">
<a href="#" class="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
JavaScript
</a>

<h3 class="how1-child2 m-t-14">
<a href="blog-detail-01.html" class="how-txt1 size-a-7 f1-l-2 cl0 hov-cl10 trans-03">
JavaScript DOM Crash Course - Part 1
</a>
</h3>
</div>
</div>
</div>

<div class="col-sm-6 p-rl-1 p-b-2">
<div class="bg-img1 size-a-5 how1 pos-relative" style="background-image: url(/assets/img/github-01.jpg);">
<button class="s-full ab-t-l flex-c-c fs-32 cl0 hov-cl10 trans-03" data-toggle="modal" data-target="#modal-video-03">
<span class="fab fa-youtube"></span>
</button>


<div class="flex-col-e-s s-full p-rl-25 p-tb-20">
<a href="#" class="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
GitHub
</a>

<h3 class="how1-child2 m-t-14">
<a href="blog-detail-01.html" class="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
Git & GitHub Crash Course For Beginners
</a>
</h3>
</div>
</div>
</div>

<div class="col-sm-6 p-rl-1 p-b-2">
<div class="bg-img1 size-a-5 how1 pos-relative" style="background-image: url(/assets/img/mysql-01.jpg);">
<button class="s-full ab-t-l flex-c-c fs-32 cl0 hov-cl10 trans-03" data-toggle="modal" data-target="#modal-video-04">
<span class="fab fa-youtube"></span>
</button>


<div class="flex-col-e-s s-full p-rl-25 p-tb-20">
<a href="#" class="dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2">
MySql
</a>

<h3 class="how1-child2 m-t-14">
<a href="blog-detail-01.html" class="how-txt1 size-h-1 f1-m-1 cl0 hov-cl10 trans-03">
MySQL Crash Course | Learn SQL
</a>
</h3>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<!-- Post -->
<section class="bg0 p-t-70">
<div class="container">
<div class="row justify-content-center">
<div class="col-md-10 col-lg-8">

<div class="p-b-20">
{% for category in site.data.content_categories %}
  {% for frameworks in category[1] %}
    {% for framework in frameworks[1] %}  
<!-- Sub-Category -->
<div class="tab01 p-b-20">
<div class="tab01-head how2 how2-cl1 bocl12 flex-s-c m-r-10 m-r-0-sr991">
<!-- Sub-Category tab -->
<h3 class="f1-m-2 cl12 tab01-title">
{{ framework.name }}
</h3>

<!-- Nav tabs -->
<ul class="nav nav-tabs" role="tablist">
    {% assign tab_id = 0 %}
    {% for list in framework.list %}
    {% assign tab_id = tab_id | plus:1 %}     
      {% if tab_id == 1 %}    
<li class="nav-item">
<a class="nav-link active" data-toggle="tab" href="#{{ framework.name | replace: ' ', '-'}}-{{ tab_id }}" role="tab">{{list.name}}</a>
</li>
      {% else %}
<li class="nav-item">
<a class="nav-link" data-toggle="tab" href="#{{ framework.name | replace: ' ', '-'}}-{{ tab_id }}" role="tab">{{list.name}}</a>
</li>      
      {% endif %}
    {% endfor %}

<li class="nav-item-more dropdown dis-none">
<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
<i class="fa fa-ellipsis-h"></i>
</a>

<ul class="dropdown-menu">

</ul>
</li>
</ul>

<!--  -->
<a href="category-01.html" class="tab01-link f1-s-1 cl9 hov-cl10 trans-03">
View all
<i class="fs-12 m-l-5 fa fa-caret-right"></i>
</a>
</div>


<!-- Tab panes -->
<div class="tab-content p-t-35">
<!-- - -->
    {% assign tab_id = 0 %}
    {% for list in framework.list %}
    {% assign tab_id = tab_id | plus:1 %}
    {% assign type = list.name | downcase %}     

<div class="tab-pane fade show active" id="{{ framework.name | replace: ' ', '-'}}-{{ tab_id }}" role="tabpanel">
<div class="row">

<div class="col-sm-6 p-r-25 p-r-15-sr991">
{% assign count = 0 %}
  {% for post in site.posts %}
      {% assign subcat = framework.name | downcase | replace: "-", " "%}
      {% assign sub_cat = post.sub_category | replace: "-", " " %}
      
    {% if sub_cat == subcat %}
      {% if post.type == type %}    
        {% assign count = count | plus:1 %}
        {% if count == 1 %}

<!-- Item post -->	
<div class="m-b-30">
<a href="{{ root_url }}{{ post.url | prepend: site.baseurl }}" class="wrap-pic-w hov1 trans-03">
<img src="{{ post.img }}" alt="IMG" height=260>
</a>

<div class="p-t-20">
<h5 class="p-b-5">
<a href="{{ root_url }}{{ post.url | prepend: site.baseurl }}" class="f1-m-3 cl2 hov-cl10 trans-03">
{{ post.title }}
</a>
</h5>

<span class="cl8">
<a href="#" class="f1-s-4 cl8 hov-cl10 trans-03">
by {{ post.author }}
</a>

<span class="f1-s-3 m-rl-3">
-
</span>

<span class="f1-s-3">
{{ post.date | date: "%a, %d-%B-%Y" }}
</span>
</span>
</div>
</div>
        {% endif %}
      {% endif %}
    {% endif %}
{% endfor %}
</div>

<div class="col-sm-6 p-r-25 p-r-15-sr991">
{% assign count = 0 %}
  {% for post in site.posts %}
      {% assign subcat = framework.name | downcase | replace: "-", " " %}
      {% assign sub_cat = post.sub_category | replace: "-", " " %}
      
    {% if sub_cat == subcat %}
      {% if post.type == type %}        
        {% assign count = count | plus:1 %}
        {% if count > 1 and count <= 4 %}
<!-- Item post -->	
<div class="flex-wr-sb-s m-b-30">
<a href="{{ root_url }}{{ post.url | prepend: site.baseurl }}" class="size-w-1 wrap-pic-w hov1 trans-03">
<img src="{{ post.img }}" alt="IMG" height=75>
</a>

<div class="size-w-2">
<h5 class="p-b-5">
<a href="{{ root_url }}{{ post.url | prepend: site.baseurl }}" class="f1-s-5 cl3 hov-cl10 trans-03">
{{ post.title }}
</a>
</h5>

<span class="cl8">
<a href="#" class="f1-s-6 cl8 hov-cl10 trans-03">
by {{ post.author }}
</a>

<span class="f1-s-3 m-rl-3">
-
</span>

<span class="f1-s-3">
{{ post.date | date: "%a, %d-%B-%Y" }}
</span>
</span>
</div>
</div>
        {% endif %}
      {% endif %}
    {% endif %}
{% endfor %}

</div>
</div>
</div>
{% endfor %}
<!-- - -->

</div>
</div>
    {% endfor %}
  {% endfor %}
{% endfor %}
</div>
</div>

<div class="col-md-10 col-lg-4">
<div class="p-l-10 p-rl-0-sr991 p-b-20">
<!--  -->
<div>
<div class="how2 how2-cl4 flex-s-c">
<h3 class="f1-m-2 cl3 tab01-title">
Most Popular
</h3>
</div>

<ul class="p-t-35">
  {% assign count = 0%}
  {% for post in site.posts offset: 0 limit :5%}
  {% assign count = count | plus: 1%}  
<li class="flex-wr-sb-s p-b-22">
<div class="size-a-8 flex-c-c borad-3 size-a-8 bg9 f1-m-4 cl0 m-b-6">
{{ count }}
</div>

<a href="{{ site_url }}{{ post.url | prepend: site.baseurl }}" class="size-w-3 f1-s-7 cl3 hov-cl10 trans-03">
{{ post.title }}
</a>
</li>
{% endfor %}

</ul>
</div>

<!--  -->
<div class="flex-c-s p-t-8">
<a href="#">
<img class="max-w-full" src="/assets/img/banner-02.jpg" alt="IMG">
</a>
</div>

<!--  -->
<div class="p-t-50">
<div class="how2 how2-cl4 flex-s-c">
<h3 class="f1-m-2 cl3 tab01-title">
Stay Connected
</h3>
</div>

<ul class="p-t-35">
<li class="flex-wr-sb-c p-b-20">
<a href="#" class="size-a-8 flex-c-c borad-3 size-a-8 bg-facebook fs-16 cl0 hov-cl0">
<span class="fab fa-facebook-f"></span>
</a>

<div class="size-w-3 flex-wr-sb-c">
<span class="f1-s-8 cl3 p-r-20">
6879 Fans
</span>

<a href="#" class="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
Like
</a>
</div>
</li>

<li class="flex-wr-sb-c p-b-20">
<a href="#" class="size-a-8 flex-c-c borad-3 size-a-8 bg-twitter fs-16 cl0 hov-cl0">
<span class="fab fa-twitter"></span>
</a>

<div class="size-w-3 flex-wr-sb-c">
<span class="f1-s-8 cl3 p-r-20">
568 Followers
</span>

<a href="#" class="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
Follow
</a>
</div>
</li>

<li class="flex-wr-sb-c p-b-20">
<a href="#" class="size-a-8 flex-c-c borad-3 size-a-8 bg-youtube fs-16 cl0 hov-cl0">
<span class="fab fa-youtube"></span>
</a>

<div class="size-w-3 flex-wr-sb-c">
<span class="f1-s-8 cl3 p-r-20">
5039 Subscribers
</span>

<a href="#" class="f1-s-9 text-uppercase cl3 hov-cl10 trans-03">
Subscribe
</a>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<!-- Banner -->
<div class="container">
<div class="flex-c-c">
<a href="#">
<img class="max-w-full" src="/assets/img/banner-01.jpg" alt="IMG">
</a>
</div>
</div>

<!-- Latest -->
<section class="bg0 p-t-60 p-b-35">
<div class="container">
<div class="row justify-content-center">
<div class="col-md-10 col-lg-8 p-b-20">
<div class="how2 how2-cl4 flex-s-c m-r-10 m-r-0-sr991">
<h3 class="f1-m-2 cl3 tab01-title">
Latest Blog Posts
</h3>
</div>

<div class="row p-t-35">
{% for post in site.posts %}
  {% if post.categories contains "blog" %}
<div class="col-sm-6 p-r-25 p-r-15-sr991">
<!-- Item latest -->	
<div class="m-b-45">
<a href="{{ site_url }}{{post.url | prepend: site.baseurl}}" class="wrap-pic-w hov1 trans-03">
<img src="{{post.img}}" alt="IMG" height=197>
</a>

<div class="p-t-16">
<h5 class="p-b-5">
<a href="{{ site_url }}{{ post.url | prepend: site.baseurl }}" class="f1-m-3 cl2 hov-cl10 trans-03">
{{ post.title }} 
</a>
</h5>

<span class="cl8">
<a href="#" class="f1-s-4 cl8 hov-cl10 trans-03">
by {{post.author}}
</a>

<span class="f1-s-3 m-rl-3">
-
</span>

<span class="f1-s-3">
{{post.date}}
</span>
</span>
</div>
</div>
</div>
  {% endif %}
{% endfor %}

</div>
</div>

<div class="col-md-10 col-lg-4">
<div class="p-l-10 p-rl-0-sr991 p-b-20">
<!-- Video -->
<div class="p-b-55">
<div class="how2 how2-cl4 flex-s-c m-b-35">
<h3 class="f1-m-2 cl3 tab01-title">
Featured Video
</h3>
</div>

<div>
<div class="wrap-pic-w pos-relative">

<iframe width="340" height="300" src="https://www.youtube.com/embed/VjXb3PRL9WI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="p-tb-16 p-rl-25 bg3">
<h5 class="p-b-5">
<a href="#" class="f1-m-3 cl0 hov-cl10 trans-03">
What Is GraphQL?
</a>
</h5>

<span class="cl15">
<a href="https://www.youtube.com/channel/UCyU5wkjgQYGRB0hIHMwm2Sg" target="_blank" class="f1-s-4 cl8 hov-cl10 trans-03">
by  LevelUpTuts
</a>

<span class="f1-s-3 m-rl-3">
-
</span>

<span class="f1-s-3">
Jan 10, 2018
</span>
</span>
</div>
</div>	
</div>

<!-- Subscribe -->
<div class="bg10 p-rl-35 p-t-28 p-b-35 m-b-55" style="background: #efefef;">
        {% include newsletter.html %}
</div>

<!-- Tag -->
<div class="p-b-55">
<div class="how2 how2-cl4 flex-s-c m-b-30">
<h3 class="f1-m-2 cl3 tab01-title">
Tags
</h3>
</div>

<div class="flex-wr-s-s m-rl--5">
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tag_words = site_tags | split:',' | sort %}
							
<!--  cycles through tag list and creates header row of all tags used in site with accompanying per-tag counts...-->
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}

								<a href="#{{ this_word | cgi_escape }}" class="flex-c-c size-h-2 bo-1-rad-20 bocl12 f1-s-1 cl8 hov-btn2 trans-03 p-rl-20 p-tb-5 m-all-5">
									{{ this_word }} <span>({{ site.tags[this_word].size }})</span>
								</a>
  {% endunless %}{% endfor %}
</div>	
</div>
</div>
</div>
</div>
</div>
</section>

