// lib/main.dart

import 'package:flutter/material.dart';
import 'screens/quran_reader_screen.dart';
import 'screens/history_timeline_screen.dart';

void main() {
  runApp(const NurAlQuranApp());
}

class NurAlQuranApp extends StatelessWidget {
  const NurAlQuranApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Nur Al-Qur\'an',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF0A0F1E),
        primaryColor: const Color(0xFFC9A227),
        colorScheme: const ColorScheme.dark(
          primary: Color(0xFFC9A227),
          secondary: Color(0xFFF4D03F),
          surface: Color(0xFF141C35),
        ),
      ),
      home: const MainNavigationScreen(),
    );
  }
}

class MainNavigationScreen extends StatefulWidget {
  const MainNavigationScreen({Key? key}) : super(key: key);

  @override
  State<MainNavigationScreen> createState() => _MainNavigationScreenState();
}

class _MainNavigationScreenState extends State<MainNavigationScreen> {
  int _currentIndex = 0;

  final List<Widget> _screens = const [
    QuranReaderScreen(),
    HistoryTimelineScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_currentIndex],
      bottomNavigationBar: NavigationBar(
        backgroundColor: const Color(0xFF0F1629),
        indicatorColor: const Color(0x33C9A227),
        selectedIndex: _currentIndex,
        onDestinationSelected: (idx) => setState(() => _currentIndex = idx),
        destinations: const [
          NavigationDestination(
            icon: Icon(Icons.menu_book, color: Color(0xFF9BA3C5)),
            selectedIcon: Icon(Icons.menu_book, color: Color(0xFFF4D03F)),
            label: 'Al-Qur\'an',
          ),
          NavigationDestination(
            icon: Icon(Icons.history_edu, color: Color(0xFF9BA3C5)),
            selectedIcon: Icon(Icons.history_edu, color: Color(0xFFF4D03F)),
            label: 'Sejarah Islam',
          ),
        ],
      ),
    );
  }
}
