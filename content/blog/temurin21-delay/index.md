---
title: Eclipse Temurin 21 release delay
date: "2023-09-28T12:00:00+00:00"
author: pmc
description: Adoptium is experiencing a delay to the release of Temurin 21
tags:
  - adoptium
  - temurin
---
At Adoptium we were as excited as everyone else to welcome the release of Java 21 last week. We have been testing OpenJDK 21 extensively, and have successfully built and [AQAvit](https://adoptium.net/en-GB/aqavit) verified the OpenJDK 21 GA source code release (based on the jdk-21+35 tag).

Our community is committed to ensuring that all our builds are compliant to the Java specification before declaring them an official Eclipse Temurin release. We believe it is important to ensure that every official release is secure and high-quality as determined by AQAvit, and is Java compliant as determined by Oracle’s [Technology Compatibility Kit (TCK)](https://openjdk.org/groups/conformance/JckAccess). We learned only a few days before OpenJDK 21’s GA that the Java 21 TCK tests are subject to a new license agreement.

Naturally the Eclipse Foundation, like other Java publishers, must undergo due diligence in assessing and agreeing to the updated license agreement, which means that a formal release of Temurin 21 will be subject to delays while the legal agreements are processed. We do not currently have a date of when this agreement will be completed, but when it is we hope to get the primary platforms released within a day or two thereafter.

In the meantime, if you need to perform testing on the new Eclipse Temurin 21 candidate, our [blog on early access builds](https://adoptium.net/blog/2023/08/early-access-builds/) will show you how to access builds based on the jdk-21+35 tag. These can be downloaded from [adoptium.net](https://adoptium.net/temurin/nightly/?version=21) or via the [Adoptium API](http://api.adoptium.net). These should be considered “not for production use” at present.

Early access builds do not have Linux installers available, however the tar files are easy to extract to wherever on the system you wish where you can then add the bin directory of the extracted tar file into your PATH. If you want to make that version the default on your system (not generally recommended for an early access build) you can do so with the `update-alternatives` command. Samples of those can be seen in [our spec files](https://github.com/adoptium/installer/blob/61e4cf765d6202efbedf36f62bd74ecbeea171ea/linux/jdk/redhat/src/main/packaging/temurin/20/temurin-20-jdk.spec#L154).

Similarly, we do not provide container images for early access builds, but if you wish to use those builds in containers you can download the tar files within your Dockerfiles. For a reference guide to how we create ours, the Dockerfiles used for JDK20 are in the [adoptium/containers repository](https://github.com/adoptium/containers/tree/main/20/jdk) and can be adapted as required to pull the artefacts from the [jdk-21+35-ea release](https://github.com/adoptium/temurin21-binaries/releases/tag/jdk-21%2B35-ea-beta). Alternatively, pull the tar file using the Adoptium API and extract them into your container image in the Dockerfile. Sample commands for pulling from the API are in the early access blog linked above.
