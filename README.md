
<h6 align="center"><img align="center" src="AngularClient/src/assets/img/main_logo.png"><h6>
<h1 align="center">Final Year Project - 2015 Batch</h1>
<h2 align="center">An Intelligent Sinhala-English Dictionary / Thesaurus / Word Look-Up Tool</h2>

<h6 align="center"><a href="http://thesaurus.projects.uom.lk">thesaurus.projects.uom.lk</a></h6>

```diff
- This project is still in Progress
```

### Supervisor : Prof. Gihan Dias

### Group Members
  - D.T.P. Jayathilaka [thilinaprasad.15@cse.mrt.ac.lk](thilinaprasad.15@cse.mrt.ac.lk)
  - R.M.M. Indrachapa [maneesh.15@cse.mrt.ac.lk](maneesh.15@cse.mrt.ac.lk)
  - W.Y.K.R. Ariyawansha [yasirurandeepa.15@cse.mrt.ac.lk](yasirurandeepa.15@cse.mrt.ac.lk)

> 

## Problem Statement

Most of the knowledge written in English. Languages like Sinhala can be rarely found from internet sources. Therefore, the people who have different mother tongues can’t access most of the knowledge available unless they know English. So, machine translation is the potential solution for giving access to the world's knowledge available in English.

Today, we can translate almost any language to another language by using google translator. This is also available for the Sinhala language. But the main issue in the Sinhala language is that the words which results after the translation is not matching properly. People are struggling when to use appropriate Sinhala words. This is because there are so many synonyms for one word in Sinhala language and they are coming from various scripts including Pali, Sanskrit, Tamil and etc. No one knows which word suitable for various kinds of situations. Even expert Sinhala professors didn’t know much about this.

As an example, if someone says, “I drink water” in English, there are several synonyms for the word “Water”. They are coming from different scripts and these words are used in different situations in Sinhala as shown in below.

- ජලය - Scientific Usage, Ex: - ජල විදුලි බලාගාරය, ජල බිල්පත
- වතුර - Normal Usage, Ex: - වතුර බොනවා, වතුර මල
- පැන් - Religious Usage (by Buddhists).
- දිය - Literature Usage.

Here we have to find the most suitable Sinhala word. So, when finding suitable Sinhala word, we have to look for other words in the sentence as well. We can translate the above sentence (I drink water) as මම වතුර බොමි, මම ජලය බොමි, මම පැන් බොමි, මම දිය බොමි. Likewise, there are a number of ways to say the same thing in Sinhala language. But in this case most suitable translation is මම වතුර බොමි. Therefore, the problem is to find the most appropriate word for the considered situation.

A thesaurus can be used to find synonyms. In general, a thesaurus is a reference work that group list of words according to their similarity of meaning. There are so many thesauri that are available online for the English language. But there is no such thing that exists for the Sinhala language. Therefore, the requirement of an intelligent tool to do this process for the Sinhala language in an automated way is essential for the Sri Lankan people. It is very important and valuable for them.

## Project Objectives

The goal of this research project is to develop an Intelligent Sinhala-English Dictionary, Thesaurus & Word-Lookup tool to translate and find the context of words in Sinhala and English languages. 
 
## Key Layers in Implementation (Server-side) 

![System Architecture](https://github.com/maneeshaindrachapa/FYP/blob/master/WorkInProgress/Docs/images/FYP_Archi.png?raw=true)

There are 3 main layers in server side of the application,

**1. Data Layer**

This layer is responsible for storing the datasets and models which needed to each module of the system. All of these datasets and models are stored in the server to provide access whenever requested by a module.

**2. Data Accessing and Processing Layer**

This is the main module that responsible for return meaningful output from the system. In this layer there are separate modules which specified to execute specific tasks related to the user requests. The design diagram for this layer with separate modules as follows.

![Internal architecture of Data accessing and processing layer](https://github.com/maneeshaindrachapa/FYP/blob/master/WorkInProgress/Docs/images/System%20Diagram.png?raw=true)

 - Language identifier module
 - Spell Checker Module
 - Pos-tagger module
 - Similar word cluster generator
 - Word definition extractor module
 - Language translation module
 - Word example sentence extractor
 - Language Translation module
 - Text-to-speech module
```
- Implemntation details written inside each module
```
**3. End-points Layer**


## System Upto Now
![System upto now](https://raw.githubusercontent.com/maneeshaindrachapa/FYP/master/WorkInProgress/Docs/images/screenshot.png)
<h6 align="center"><a href="http://thesaurus.projects.uom.lk">thesaurus.projects.uom.lk</a></h6>
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA2MDc3NzEzOSwtMjEyNTcwNjIwMSwxMz
g4NTQwMjY3LC00NTU0MjAxNjMsLTU5NTg4MzU5OCwtMTMyMDY3
ODE5NiwtNzkwNzg5ODcxLDE0MDEzMzU1MjQsLTQxMjQ4ODgzMS
w4MjQ0NDMxNzAsMTEyNzc3NDQ2OCwtMTY5Njc5MjA5XX0=
-->