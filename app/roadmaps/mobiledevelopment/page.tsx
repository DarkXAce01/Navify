"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

// Define the Circle component with click effects
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; onClick?: () => void }
>(({ className, children, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative z-10 flex items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] text-center transition duration-300 cursor-pointer hover:bg-creme hover:text-white hover:shadow-lg",
        "h-16 w-40 md:h-20 md:w-45 lg:h-24 lg:w-50 xl:h-28 xl:w-56",
        className
      )}
      onClick={onClick}
    >
      <span className="text-xs md:text-sm lg:text-base xl:text-lg">
        {children}
      </span>
    </div>
  );
});
// Add displayName to the Circle component
Circle.displayName = "Circle";

const FlutterRoadmap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dartRef = useRef<HTMLDivElement>(null);
  const dartPadRef = useRef<HTMLDivElement>(null);
  const variablesRef = useRef<HTMLDivElement>(null);
  const functionsRef = useRef<HTMLDivElement>(null);
  const operationsRef = useRef<HTMLDivElement>(null);
  const setupEnvRef = useRef<HTMLDivElement>(null);
  const flutterCliRef = useRef<HTMLDivElement>(null);
  const vsCodeRef = useRef<HTMLDivElement>(null);
  const androidStudioRef = useRef<HTMLDivElement>(null);
  const widgetsRef = useRef<HTMLDivElement>(null);

  const inheritedWidgetRef = useRef<HTMLDivElement>(null);
  const statelessWidgetsRef = useRef<HTMLDivElement>(null);
  const statefulWidgetsRef = useRef<HTMLDivElement>(null);
  const workingWithAssetsRef = useRef<HTMLDivElement>(null);
  const fontsRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const versionControlRef = useRef<HTMLDivElement>(null);
  const gitRef = useRef<HTMLDivElement>(null);
  const repoHostingRef = useRef<HTMLDivElement>(null);
  const designPrinciplesRef = useRef<HTMLDivElement>(null);
  const dependencyInjectionRef = useRef<HTMLDivElement>(null);
  const designPatternsRef = useRef<HTMLDivElement>(null);
  const solidPrinciplesRef = useRef<HTMLDivElement>(null);
  const oopRef = useRef<HTMLDivElement>(null);
  const packageManagerRef = useRef<HTMLDivElement>(null);
  const pubDevRef = useRef<HTMLDivElement>(null);
  const flutterPubRef = useRef<HTMLDivElement>(null);
  const workingWithApisRef = useRef<HTMLDivElement>(null);
  const webSocketsRef = useRef<HTMLDivElement>(null);
  const graphQlRef = useRef<HTMLDivElement>(null);
  const restfulApisRef = useRef<HTMLDivElement>(null);
  const storageRef = useRef<HTMLDivElement>(null);
  const sqLiteRef = useRef<HTMLDivElement>(null);
  const sharedPreferencesRef = useRef<HTMLDivElement>(null);
  const firebaseRef = useRef<HTMLDivElement>(null);
  const advancedDartRef = useRef<HTMLDivElement>(null);
  const listsRef = useRef<HTMLDivElement>(null);
  const collectionsRef = useRef<HTMLDivElement>(null);
  const lambdasRef = useRef<HTMLDivElement>(null);
  const functionalProgrammingRef = useRef<HTMLDivElement>(null);
  const coreLibrariesRef = useRef<HTMLDivElement>(null);
  const stateManagementRef = useRef<HTMLDivElement>(null);
  const changeNotifierRef = useRef<HTMLDivElement>(null);
  const valueNotifierRef = useRef<HTMLDivElement>(null);
  const riverpodRef = useRef<HTMLDivElement>(null);
  const reactiveProgrammingRef = useRef<HTMLDivElement>(null);
  const animationsRef = useRef<HTMLDivElement>(null);
  const animationControllerRef = useRef<HTMLDivElement>(null);
  const animationBuilderRef = useRef<HTMLDivElement>(null);
  const animationWidgetRef = useRef<HTMLDivElement>(null);
  const testingRef = useRef<HTMLDivElement>(null);
  const devToolsRef = useRef<HTMLDivElement>(null);
  const flutterInspectorRef = useRef<HTMLDivElement>(null);
  const flutterOutlineRef = useRef<HTMLDivElement>(null);
  const flutterInternalsRef = useRef<HTMLDivElement>(null);
  const renderObjectsRef = useRef<HTMLDivElement>(null);
  const threeTreesRef = useRef<HTMLDivElement>(null);
  const immutabilityRef = useRef<HTMLDivElement>(null);
  const ciCdRef = useRef<HTMLDivElement>(null);
  const deploymentRef = useRef<HTMLDivElement>(null);
  const appStoreRef = useRef<HTMLDivElement>(null);
  const playStoreRef = useRef<HTMLDivElement>(null);
  const guidelinesRef = useRef<HTMLDivElement>(null);
  const analyticsRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const mixPanelRef = useRef<HTMLDivElement>(null);
  const firebaseAnalyticsRef = useRef<HTMLDivElement>(null);
  const googleAnalyticsRef = useRef<HTMLDivElement>(null);

  const references = {
    "Learn the Basics of Dart": "https://dart.dev/guides",
    "Dart Pad": "https://dartpad.dev/",
    Variables: "https://dart.dev/guides/language/language-tour#variables",
    Functions: "https://dart.dev/guides/language/language-tour#functions",
    Operations: "https://dart.dev/guides/language/language-tour#operators",
    "Setup Development Environment":
      "https://www.youtube.com/watch?v=6IVNyJB1wzo",
    "Flutter CLI": "https://flutter.dev/docs/reference/flutter-cli",
    "VS Code": "https://code.visualstudio.com/docs",
    "Android Studio": "https://developer.android.com/studio",
    Widgets: "https://flutter.dev/docs/development/ui/widgets",
    "Inherited Widget":
      "https://api.flutter.dev/flutter/widgets/InheritedWidget-class.html",
    "Stateless Widgets":
      "https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html",
    "Stateful Widgets":
      "https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html",
    "Working with Assets":
      "https://flutter.dev/docs/development/ui/assets-and-images",
    Fonts: "https://flutter.dev/docs/cookbook/design/fonts",
    Images: "https://flutter.dev/docs/cookbook/images",
    "Version Control Systems": "https://git-scm.com/",
    Git: "https://git-scm.com/",
    "Repo Hosting Services": "https://github.com/",
    "Design Principles": "https://en.wikipedia.org/wiki/Software_design",
    "Dependency Injection":
      "https://flutter.dev/docs/development/data-and-backend/state-mgmt/simple#dependency-injection",
    "Design Patterns": "https://refactoring.guru/design-patterns",
    "SOLID Principles": "https://en.wikipedia.org/wiki/SOLID",
    OOP: "https://www.geeksforgeeks.org/a-step-by-step-approach-to-learn-object-oriented-programming/",
    "Package Manager": "https://medium.com/@pranamsharma.1997/what-is-android-package-manager-its-function-s-with-example-56b7d818ac84#:~:text=Package%20Manager%20is%20an%20essential,installed%20on%20an%20Android%20device.",
    "pub.dev": "https://pub.dev/",
    "flutter pub / dart pub": "https://dart.dev/tools/pub",
    "Working with APIs":
      "https://flutter.dev/docs/cookbook/networking/fetch-data",
    "Web Sockets":
      "https://dart.dev/guides/libraries/library-tour#dartwebsocket",
    GraphQL: "https://graphql.org/",
    "RESTful APIs": "https://restfulapi.net/",
    Storage: "https://developer.android.com/training/data-storage",
    SQLite: "https://pub.dev/packages/sqflite",
    "Shared Preferences": "https://pub.dev/packages/shared_preferences",
    Firebase: "https://firebase.google.com/docs/flutter/setup",
    "Advanced Dart": "https://www.udemy.com/course/complete-dart-programming-language-basic-to-advanced/?utm_source=adwords&utm_medium=udemyads&utm_campaign=DSA_Catchall_la.EN_cc.ROW&campaigntype=Search&portfolio=ROW-English&language=EN&product=Course&test=&audience=DSA&topic=&priority=&utm_content=deal4584&utm_term=_._ag_88010211481_._ad_535397282064_._kw__._de_c_._dm__._pl__._ti_dsa-406594358574_._li_1011080_._pd__._&matchtype=&gad_source=1&gclid=Cj0KCQjw6auyBhDzARIsALIo6v_p_hzxi0dINwvT-AcFb8_w2i9WYV-nLNLT1UW6baqIfbItzLAYiIIaAjgDEALw_wcB",
    Lists: "https://dart.dev/guides/language/language-tour#lists",
    Collections: "https://dart.dev/language/collections",
    Lambdas: "https://dart.dev/tools/linter-rules/unnecessary_lambdas",
    "Functional Programming":
      "https://en.wikipedia.org/wiki/Functional_programming",
    "Core Libraries": "https://dart.dev/guides/libraries",
    "State Management":
      "https://flutter.dev/docs/development/data-and-backend/state-mgmt",
    ChangeNotifier:
      "https://api.flutter.dev/flutter/foundation/ChangeNotifier-class.html",
    ValueNotifier:
      "https://api.flutter.dev/flutter/foundation/ValueNotifier-class.html",
    Riverpod: "https://riverpod.dev/",
    "Reactive Programming":
      "https://cfdevelop.medium.com/reactive-programming-in-flutter-understanding-the-power-of-observables-and-computed-values-with-7a372db59e05",
    Animations: "https://flutter.dev/docs/development/ui/animations",
    "Animation Controller":
      "https://api.flutter.dev/flutter/animation/AnimationController-class.html",
    "Animation Builder":
      "https://api.flutter.dev/flutter/widgets/AnimatedBuilder-class.html",
    "Animation Widget":
      "https://api.flutter.dev/flutter/widgets/AnimatedWidget-class.html",
    Testing: "https://flutter.dev/docs/testing",
    "Dev Tools": "https://flutter.dev/docs/development/tools/devtools/overview",
    "Flutter Inspector":
      "https://docs.flutter.dev/tools/devtools/inspector",
    "Flutter Outline":
      "https://www.youtube.com/watch?v=RdPkFd6_fTA",
    "Flutter Internals":
      "https://flutter.dev/docs/development/tools/flutter-outline",
    "Render Objects":
      "https://api.flutter.dev/flutter/rendering/RenderObject-class.html",
    "3 Trees": "https://medium.com/@omlondhe/flutters-3-tree-architecture-9263b2bd50d1",
    Immutability:
      "https://flutter.dev/docs/development/data-and-backend/state-mgmt/simple#immutability",
    "CI/CD": "https://docs.flutter.dev/deployment/cd",
    Deployment: "https://docs.flutter.dev/deployment/flavors",
    "App Store": "https://developer.apple.com/app-store/",
    "Play Store": "https://docs.flutter.dev/deployment/android",
    "Guidelines & Protocols": "https://flutter.dev/docs/deployment/android",
    Analytics:
      "https://fluttergems.dev/analytics-consumer-insights/",
    Segment: "https://segment.com/",
    "Mix Panel": "https://mixpanel.com/",
    "Firebase Analytics": "https://firebase.google.com/docs/analytics",
    "Google Analytics": "https://analytics.google.com/",
  };

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <MaxWidthWrapper className="text-lblack mb-12 mt-12 sm:mt-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-creme max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mb-10">
        Mobile App Development Roadmap
      </h1>
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div
        className="relative flex flex-col items-center justify-start w-full max-w-[1600px] p-10 mx-auto rounded-lg"
        ref={containerRef}
      >
        <div className="flex flex-col gap-8 items-center">
          <Circle
            ref={dartRef}
            onClick={() => handleClick(references["Learn the Basics of Dart"])}
          >
            Learn the Basics of Dart
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={dartPadRef}
              onClick={() => handleClick(references["Dart Pad"])}
            >
              Dart Pad
            </Circle>
            <Circle className="circle-c"
              ref={variablesRef}
              onClick={() => handleClick(references.Variables)}
            >
              Variables
            </Circle>
            <Circle className="circle-c"
              ref={functionsRef}
              onClick={() => handleClick(references.Functions)}
            >
              Functions
            </Circle>
            <Circle className="circle-c"
              ref={operationsRef}
              onClick={() => handleClick(references.Operations)}
            >
              Operations
            </Circle>
          </div>
          <Circle
            ref={setupEnvRef}
            onClick={() =>
              handleClick(references["Setup Development Environment"])
            }
          >
            Setup Development Environment
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={flutterCliRef}
              onClick={() => handleClick(references["Flutter CLI"])}
            >
              Flutter CLI
            </Circle>
            <Circle className="circle-c"
              ref={vsCodeRef}
              onClick={() => handleClick(references["VS Code"])}
            >
              VS Code
            </Circle>
            <Circle className="circle-c"
              ref={androidStudioRef}
              onClick={() => handleClick(references["Android Studio"])}
            >
              Android Studio
            </Circle>
          </div>
          <Circle
            ref={widgetsRef}
            onClick={() => handleClick(references.Widgets)}
          >
            Widgets
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={inheritedWidgetRef}
              onClick={() => handleClick(references["Inherited Widget"])}
            >
              Inherited Widget
            </Circle>
            <Circle className="circle-c"
              ref={statelessWidgetsRef}
              onClick={() => handleClick(references["Stateless Widgets"])}
            >
              Stateless Widgets
            </Circle>
            <Circle className="circle-c"
              ref={statefulWidgetsRef}
              onClick={() => handleClick(references["Stateful Widgets"])}
            >
              Stateful Widgets
            </Circle>
          </div>
          <Circle
            ref={workingWithAssetsRef}
            onClick={() => handleClick(references["Working with Assets"])}
          >
            Working with Assets
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={fontsRef}
              onClick={() => handleClick(references.Fonts)}
            >
              Fonts
            </Circle>
            <Circle className="circle-c"
              ref={imagesRef}
              onClick={() => handleClick(references.Images)}
            >
              Images
            </Circle>
          </div>

          <Circle ref={gitRef} onClick={() => handleClick(references.Git)}>
            Git
          </Circle>
          <Circle
            ref={repoHostingRef}
            onClick={() => handleClick(references["Repo Hosting Services"])}
          >
            Repo Hosting Services
          </Circle>
          <Circle
            ref={designPrinciplesRef}
            onClick={() => handleClick(references["Design Principles"])}
          >
            Design Principles
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={dependencyInjectionRef}
              onClick={() => handleClick(references["Dependency Injection"])}
            >
              Dependency Injection
            </Circle>
            <Circle className="circle-c"
              ref={designPatternsRef}
              onClick={() => handleClick(references["Design Patterns"])}
            >
              Design Patterns
            </Circle>
            <Circle className="circle-c"
              ref={solidPrinciplesRef}
              onClick={() => handleClick(references["SOLID Principles"])}
            >
              SOLID Principles
            </Circle>
            <Circle className="circle-c" ref={oopRef} onClick={() => handleClick(references.OOP)}>
              OOP
            </Circle>
          </div>
          <Circle
            ref={packageManagerRef}
            onClick={() => handleClick(references["Package Manager"])}
          >
            Package Manager
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={pubDevRef}
              onClick={() => handleClick(references["pub.dev"])}
            >
              pub.dev
            </Circle>
            <Circle className="circle-c"
              ref={flutterPubRef}
              onClick={() => handleClick(references["flutter pub / dart pub"])}
            >
              flutter pub / dart pub
            </Circle>
          </div>
          <Circle
            ref={workingWithApisRef}
            onClick={() => handleClick(references["Working with APIs"])}
          >
            Working with APIs
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={webSocketsRef}
              onClick={() => handleClick(references["Web Sockets"])}
            >
              Web Sockets
            </Circle>
            <Circle className="circle-c"
              ref={graphQlRef}
              onClick={() => handleClick(references.GraphQL)}
            >
              GraphQL
            </Circle>
            <Circle className="circle-c"
              ref={restfulApisRef}
              onClick={() => handleClick(references["RESTful APIs"])}
            >
              RESTful APIs
            </Circle>
          </div>
          <Circle
            ref={storageRef}
            onClick={() => handleClick(references.Storage)}
          >
            Storage
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={sqLiteRef}
              onClick={() => handleClick(references.SQLite)}
            >
              SQLite
            </Circle>
            <Circle className="circle-c"
              ref={sharedPreferencesRef}
              onClick={() => handleClick(references["Shared Preferences"])}
            >
              Shared Preferences
            </Circle>
            <Circle className="circle-c"
              ref={firebaseRef}
              onClick={() => handleClick(references.Firebase)}
            >
              Firebase
            </Circle>
          </div>
          <Circle
            ref={advancedDartRef}
            onClick={() => handleClick(references["Advanced Dart"])}
          >
            Advanced Dart
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={listsRef}
              onClick={() => handleClick(references.Lists)}
            >
              Lists
            </Circle>
            <Circle className="circle-c"
              ref={collectionsRef}
              onClick={() => handleClick(references.Collections)}
            >
              Collections
            </Circle>
            <Circle className="circle-c"
              ref={lambdasRef}
              onClick={() => handleClick(references.Lambdas)}
            >
              Lambdas
            </Circle>
            <Circle className="circle-c"
              ref={functionalProgrammingRef}
              onClick={() => handleClick(references["Functional Programming"])}
            >
              Functional Programming
            </Circle>
            <Circle className="circle-c"
              ref={coreLibrariesRef}
              onClick={() => handleClick(references["Core Libraries"])}
            >
              Core Libraries
            </Circle>
          </div>
          <Circle
            ref={stateManagementRef}
            onClick={() => handleClick(references["State Management"])}
          >
            State Management
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={changeNotifierRef}
              onClick={() => handleClick(references.ChangeNotifier)}
            >
              ChangeNotifier
            </Circle>
            <Circle className="circle-c"
              ref={valueNotifierRef}
              onClick={() => handleClick(references.ValueNotifier)}
            >
              ValueNotifier
            </Circle>
            <Circle className="circle-c"
              ref={riverpodRef}
              onClick={() => handleClick(references.Riverpod)}
            >
              Riverpod
            </Circle>
          </div>
          <Circle
            ref={reactiveProgrammingRef}
            onClick={() => handleClick(references["Reactive Programming"])}
          >
            Reactive Programming
          </Circle>
          <Circle
            ref={animationsRef}
            onClick={() => handleClick(references.Animations)}
          >
            Animations
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={animationControllerRef}
              onClick={() => handleClick(references["Animation Controller"])}
            >
              Animation Controller
            </Circle>
            <Circle className="circle-c"
              ref={animationBuilderRef}
              onClick={() => handleClick(references["Animation Builder"])}
            >
              Animation Builder
            </Circle>
            <Circle className="circle-c"
              ref={animationWidgetRef}
              onClick={() => handleClick(references["Animation Widget"])}
            >
              Animation Widget
            </Circle>
          </div>
          <Circle
            ref={testingRef}
            onClick={() => handleClick(references.Testing)}
          >
            Testing
          </Circle>
          <Circle
            ref={devToolsRef}
            onClick={() => handleClick(references["Dev Tools"])}
          >
            Dev Tools
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={flutterInspectorRef}
              onClick={() => handleClick(references["Flutter Inspector"])}
            >
              Flutter Inspector
            </Circle>
            <Circle className="circle-c"
              ref={flutterOutlineRef}
              onClick={() => handleClick(references["Flutter Outline"])}
            >
              Flutter Outline
            </Circle>
          </div>
          <Circle
            ref={flutterInternalsRef}
            onClick={() => handleClick(references["Flutter Internals"])}
          >
            Flutter Internals
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={renderObjectsRef}
              onClick={() => handleClick(references["Render Objects"])}
            >
              Render Objects
            </Circle>
            <Circle className="circle-c"
              ref={threeTreesRef}
              onClick={() => handleClick(references["3 Trees"])}
            >
              3 Trees
            </Circle>
            <Circle className="circle-c"
              ref={immutabilityRef}
              onClick={() => handleClick(references.Immutability)}
            >
              Immutability
            </Circle>
          </div>
          <Circle
            ref={ciCdRef}
            onClick={() => handleClick(references["CI/CD"])}
          >
            CI/CD
          </Circle>
          <Circle
            ref={deploymentRef}
            onClick={() => handleClick(references.Deployment)}
          >
            Deployment
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={appStoreRef}
              onClick={() => handleClick(references["App Store"])}
            >
              App Store
            </Circle>
            <Circle className="circle-c"
              ref={playStoreRef}
              onClick={() => handleClick(references["Play Store"])}
            >
              Play Store
            </Circle>
            <Circle className="circle-c"
              ref={guidelinesRef}
              onClick={() => handleClick(references["Guidelines & Protocols"])}
            >
              Guidelines & Protocols
            </Circle>
          </div>
          <Circle
            ref={analyticsRef}
            onClick={() => handleClick(references.Analytics)}
          >
            Analytics
          </Circle>
          <div className="flex flex-col md:flex-row gap-10 md:pl-20">
            <Circle className="circle-c"
              ref={segmentRef}
              onClick={() => handleClick(references.Segment)}
            >
              Segment
            </Circle>
            <Circle className="circle-c"
              ref={mixPanelRef}
              onClick={() => handleClick(references["Mix Panel"])}
            >
              Mix Panel
            </Circle>
            <Circle className="circle-c"
              ref={firebaseAnalyticsRef}
              onClick={() => handleClick(references["Firebase Analytics"])}
            >
              Firebase Analytics
            </Circle>
            <Circle className="circle-c"
              ref={googleAnalyticsRef}
              onClick={() => handleClick(references["Google Analytics"])}
            >
              Google Analytics
            </Circle>
          </div>
        </div>

        {/* Beams connecting the nodes */}
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={dartRef}
          toRef={dartPadRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={dartRef}
          toRef={variablesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={dartRef}
          toRef={functionsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={dartRef}
          toRef={operationsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={dartRef}
          toRef={setupEnvRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={setupEnvRef}
          toRef={flutterCliRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={setupEnvRef}
          toRef={vsCodeRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={setupEnvRef}
          toRef={androidStudioRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={setupEnvRef}
          toRef={widgetsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={widgetsRef}
          toRef={inheritedWidgetRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={widgetsRef}
          toRef={statelessWidgetsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={widgetsRef}
          toRef={statefulWidgetsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={widgetsRef}
          toRef={workingWithAssetsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={workingWithAssetsRef}
          toRef={fontsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={workingWithAssetsRef}
          toRef={imagesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={workingWithAssetsRef}
          toRef={versionControlRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={versionControlRef}
          toRef={gitRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={versionControlRef}
          toRef={repoHostingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={repoHostingRef}
          toRef={designPrinciplesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={designPrinciplesRef}
          toRef={dependencyInjectionRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={designPrinciplesRef}
          toRef={designPatternsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={designPrinciplesRef}
          toRef={solidPrinciplesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={designPrinciplesRef}
          toRef={oopRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={designPrinciplesRef}
          toRef={packageManagerRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={packageManagerRef}
          toRef={pubDevRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={packageManagerRef}
          toRef={flutterPubRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={packageManagerRef}
          toRef={workingWithApisRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={workingWithApisRef}
          toRef={webSocketsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={workingWithApisRef}
          toRef={graphQlRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={workingWithApisRef}
          toRef={restfulApisRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={workingWithApisRef}
          toRef={storageRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={storageRef}
          toRef={sqLiteRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={storageRef}
          toRef={sharedPreferencesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={storageRef}
          toRef={firebaseRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={storageRef}
          toRef={advancedDartRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={advancedDartRef}
          toRef={listsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={advancedDartRef}
          toRef={collectionsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={advancedDartRef}
          toRef={lambdasRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={advancedDartRef}
          toRef={functionalProgrammingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={advancedDartRef}
          toRef={coreLibrariesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={advancedDartRef}
          toRef={stateManagementRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={stateManagementRef}
          toRef={changeNotifierRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={stateManagementRef}
          toRef={valueNotifierRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={stateManagementRef}
          toRef={riverpodRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={stateManagementRef}
          toRef={reactiveProgrammingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={reactiveProgrammingRef}
          toRef={animationsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={animationsRef}
          toRef={animationControllerRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={animationsRef}
          toRef={animationBuilderRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={animationsRef}
          toRef={animationWidgetRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={animationsRef}
          toRef={testingRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={testingRef}
          toRef={devToolsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={devToolsRef}
          toRef={flutterInspectorRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={devToolsRef}
          toRef={flutterOutlineRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={devToolsRef}
          toRef={flutterInternalsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={flutterInternalsRef}
          toRef={renderObjectsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={flutterInternalsRef}
          toRef={threeTreesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={flutterInternalsRef}
          toRef={immutabilityRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={flutterInternalsRef}
          toRef={ciCdRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={ciCdRef}
          toRef={deploymentRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={deploymentRef}
          toRef={appStoreRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={deploymentRef}
          toRef={playStoreRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={deploymentRef}
          toRef={guidelinesRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={deploymentRef}
          toRef={analyticsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={analyticsRef}
          toRef={segmentRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={analyticsRef}
          toRef={mixPanelRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={analyticsRef}
          toRef={firebaseAnalyticsRef}
        />
        <AnimatedBeam
          duration={10}
          containerRef={containerRef}
          fromRef={analyticsRef}
          toRef={googleAnalyticsRef}
        />
      </div>
    </MaxWidthWrapper>
  );
};
FlutterRoadmap.displayName = "FlutterRoadmap";

// Default export of the page component
export default function Page() {
  return (
    <>
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
        <FlutterRoadmap />
      </div>
    </>
  );
}
