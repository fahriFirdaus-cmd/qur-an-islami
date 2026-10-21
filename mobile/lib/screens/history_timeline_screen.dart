// lib/screens/history_timeline_screen.dart

import 'package:flutter/material.dart';

class HistoryTimelineScreen extends StatefulWidget {
  const HistoryTimelineScreen({Key? key}) : super(key: key);

  @override
  State<HistoryTimelineScreen> createState() => _HistoryTimelineScreenState();
}

class _HistoryTimelineScreenState extends State<HistoryTimelineScreen>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  final List<Map<String, dynamic>> _eras = [
    {"slug": "kenabian", "title": "Kenabian", "icon": "☀️"},
    {"slug": "khulafa", "title": "Khulafaur Rasyidin", "icon": "🌙"},
    {"slug": "umayyah", "title": "Dinasti Umayyah", "icon": "⚡"},
    {"slug": "abbasiyah", "title": "Dinasti Abbasiyah", "icon": "📚"},
    {"slug": "ilmuwan", "title": "Ilmuwan Islam", "icon": "🔬"},
  ];

  final List<Map<String, dynamic>> _events = [
    {
      "era": "kenabian",
      "year": "610 M (13 SH)",
      "title": "Turunnya Wahyu Pertama di Gua Hira",
      "desc": "Malaikat Jibril mendatangi Nabi Muhammad ﷺ dengan membawakan 5 ayat pertama Surah Al-'Alaq (Iqra').",
      "quranRef": "QS. Al-'Alaq: 1-5",
      "icon": "📖"
    },
    {
      "era": "kenabian",
      "year": "622 M (1 H)",
      "title": "Peristiwa Hijrah ke Madinah",
      "desc": "Nabi Muhammad ﷺ dan Abu Bakar berlindung di Gua Tsur sebelum tiba di Madinah, memulai kalender Hijriah.",
      "quranRef": "QS. At-Taubah: 40",
      "icon": "🕌"
    },
    {
      "era": "kenabian",
      "year": "624 M (2 H)",
      "title": "Perang Badar Al-Kubra",
      "desc": "313 pasukan Muslim meraih kemenangan telak pertama atas 1.000 pasukan Quraisy di sumur Badar.",
      "quranRef": "QS. Al-Anfal: 17",
      "icon": "⚔️"
    },
    {
      "era": "kenabian",
      "year": "630 M (8 H)",
      "title": "Fathu Makkah (Pembebasan Makkah)",
      "desc": "Nabi ﷺ membebaskan kota Makkah tanpa pertumpahan darah dan membersihkan Ka'bah dari 360 berhala.",
      "quranRef": "QS. An-Nasr: 1-3",
      "icon": "🕊️"
    },
    {
      "era": "khulafa",
      "year": "651 M (30 H)",
      "title": "Kodifikasi Mushaf Utsmani",
      "desc": "Khalifah Utsman bin Affan membukukan Al-Qur'an dalam satu standar Rasm Uthmani untuk seluruh dunia Islam.",
      "quranRef": "Standar Mushaf Resmi",
      "icon": "📜"
    },
    {
      "era": "abbasiyah",
      "year": "800 - 830 M",
      "title": "Bayt Al-Hikmah (House of Wisdom)",
      "desc": "Pusat sains, matematika, kedokteran, dan penerjemahan terbesar di Baghdad pada masa keemasan Abbasiyah.",
      "quranRef": "Pusat Keilmuan",
      "icon": "🏛️"
    },
    {
      "era": "ilmuwan",
      "year": "980 - 1037 M",
      "title": "Ibnu Sina (Avicenna) — Bapak Kedokteran",
      "desc": "Menulis kitab Al-Qanun fi At-Tibb yang menjadi rujukan kurikulum fakultas kedokteran di Eropa selama 600 tahun.",
      "quranRef": "Tokoh Peradaban",
      "icon": "🏥"
    },
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: _eras.length, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0A0F1E),
      appBar: AppBar(
        backgroundColor: const Color(0xFF0F1629),
        title: const Text('🏛️ Lini Masa Peradaban Islam', style: TextStyle(fontWeight: FontWeight.bold)),
        bottom: TabBar(
          controller: _tabController,
          isScrollable: true,
          indicatorColor: const Color(0xFFC9A227),
          labelColor: const Color(0xFFF4D03F),
          unselectedLabelColor: const Color(0xFF9BA3C5),
          tabs: _eras
              .map((e) => Tab(text: '${e["icon"]} ${e["title"]}'))
              .toList(),
        ),
      ),
      body: TabBarView(
        controller: _tabController,
        children: _eras.map((era) {
          final eraEvents = _events
              .where((ev) => ev['era'] == era['slug'] || era['slug'] == 'kenabian')
              .toList();

          return ListView.builder(
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
            itemCount: eraEvents.length,
            itemBuilder: (context, index) {
              final ev = eraEvents[index];
              return _buildTimelineItem(ev, isLast: index == eraEvents.length - 1);
            },
          );
        }).toList(),
      ),
    );
  }

  Widget _buildTimelineItem(Map<String, dynamic> event, {required bool isLast}) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Kolom Garis dan Titik Lini Masa
        Column(
          children: [
            Container(
              width: 32,
              height: 32,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: const Color(0xFF141C35),
                border: Border.all(color: const Color(0xFFC9A227), width: 2),
                boxShadow: const [
                  BoxShadow(
                    color: Color(0x33C9A227),
                    blurRadius: 8,
                  )
                ],
              ),
              child: Center(
                child: Text(event['icon'], style: const TextStyle(fontSize: 14)),
              ),
            ),
            if (!isLast)
              Container(
                width: 2,
                height: 100,
                color: const Color(0x33C9A227),
              ),
          ],
        ),
        const SizedBox(width: 16),

        // Kartu Konten Peristiwa
        Expanded(
          child: Container(
            margin: const EdgeInsets.only(bottom: 20),
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: const Color(0xFF141C35),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0x1AFFFFFF)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  event['year'],
                  style: const TextStyle(
                    color: Color(0xFFC9A227),
                    fontWeight: FontWeight.bold,
                    fontSize: 12,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  event['title'],
                  style: const TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 15,
                  ),
                ),
                const SizedBox(height: 6),
                Text(
                  event['desc'],
                  style: const TextStyle(
                    color: Color(0xFF9BA3C5),
                    fontSize: 13,
                    height: 1.5,
                  ),
                ),
                const SizedBox(height: 10),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: const Color(0x1AC9A227),
                    borderRadius: BorderRadius.circular(6),
                  ),
                  child: Text(
                    '🔗 ${event['quranRef']}',
                    style: const TextStyle(
                      color: Color(0xFFF4D03F),
                      fontSize: 11,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
