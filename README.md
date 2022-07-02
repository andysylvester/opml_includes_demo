# Welcome to the OPML Includes Demo app!

This is your README. READMEs are where you can communicate what your project is and how to use it.

<<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/andysylvester/opml_includes_demo">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">OPML Includes Demo</h3>

  <p align="center">
    View a demo of how to include multiple OPML files in a single file!
    <br />
    <a href="https://github.com/andysylvester/opml_includes_demo"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/andysylvester/opml_includes_demo">View Demo</a>
    ·
    <a href="https://github.com/andysylvester/opml_includes_demo/issues">Report Bug</a>
    ·
    <a href="https://github.com/andysylvester/opml_includes_demo/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This app demonstrates the includes feature of the <a href="https://github.com/scripting/opmlPackage">opmlPackage</a> NPM package by <a href="http://scripting.com/">Dave Winer</a>. It also includes code from the <a href="https://github.com/scripting/outlineBrowser">outlineBrowser</a> toolkit, also by Dave Winer.

This example shows four different <a href="http://opml.org/">OPML</a> files which have been brought into the app through the use of a single OPML containing links to the four OPML files by using the includes feature.


Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [opmlPackage](https://github.com/scripting/opmlPackage)
* [outlineBrowser](https://github.com/scripting/outlineBrowser)
* [Express](https://expressjs.com/)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Here is how to get your copy of the app running!

### Prerequisites

* Node.js install (can be local or on a server)
* NPM install
* Git (optional, but can be helpful on the install)

### Installation

1. Clone the repo if you have Git installed
   ```sh
   git clone https://github.com/andysylvester/opml_includes_demo.git
   ```
This will create a folder called opml_includes_demo

2. If you do not have Git installed, you can download a copy of the app as a Zip file, then unzip the app into a folder called "opml_includes_demo" on your computer/server.

3. In a terminal window, install the required NPM packages by changing directory to the install folder, then type the following command:
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Starting The App

To start the app, enter the following command in a terminal window in the app folder:

   ```sh
   npm start
   ```

The app will start on port 3002. If you are running the app locally, open "http://localhost:3002" in a web browser. You should see the app running as in the screenshot shown earlier on this page. If you are running the app on a server, open a tab in a web browser and enter the URL of the server with ":3002" at the end of the URL. Again, you should see the app running as in the screenshot shown earlier on this page.

## Customizing The App

The includes.opml file in the repo can be edited to load different OPML files. You can edit includes.opml using a text editor or outliner like [Drummer](http://drummer.scripting.com/). A key requirement is that in each entry within includes.opml, the attribute "tyoe" must be set to "include". An example is as follows:

   ```sh
   <outline created="Wed, 11 May 2022 21:03:42 GMT" name="oregonElections" text="Oregon Elections" type="include" url="http://drummer.scripting.com/PDXProtestNews/OregonElections.opml"></outline>
   ```
The text on the main page is in file /views/index.pug, and can be changed as you wish.

The main app is mostly an auto-generated [Express](https://expressjs.com/) application, so other Express features can be added.

The styling of the app can certainly be improved, stylesheets are in /public/stylesheets.

The app currently runs on port 3002, this can be changed by editing /bin/www.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Andy Sylvester - [@AndySylvester99](https://twitter.com/AndySylvester99) - sylvester.andy@gmail.com

Project Link: [https://github.com/andysylvester/opml_includes_demo](https://github.com/andysylvester/opml_includes_demo)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Dave Winer](http://scripting.com/) - Creator of the opmlPackage NPM module
* [Ken Smith](http://oldschool.scripting.com/KenSmith/) - Collaborator/beta tester
* [Frank McPherson](http://oldschool.scripting.com/frankm/) - Collaborator/beta tester

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/andysylvester/opml_includes_demo.svg?style=for-the-badge
[contributors-url]: https://github.com/andysylvester/reopml_includes_demopo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/andysylvester/opml_includes_demo.svg?style=for-the-badge
[forks-url]: https://github.com/andysylvester/opml_includes_demo/network/members
[stars-shield]: https://img.shields.io/github/stars/andysylvester/opml_includes_demo.svg?style=for-the-badge
[stars-url]: https://github.com/andysylvester/opml_includes_demo/stargazers
[issues-shield]: https://img.shields.io/github/issues/andysylvester/opml_includes_demo.svg?style=for-the-badge
[issues-url]: https://github.com/andysylvester/opml_includes_demo/issues
[license-shield]: https://img.shields.io/github/license/andysylvester/opml_includes_demo.svg?style=for-the-badge
[license-url]: https://github.com/andysylvester/opml_includes_demo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/andrew-sylvester-b426a251
[product-screenshot]: images/screenshot.png