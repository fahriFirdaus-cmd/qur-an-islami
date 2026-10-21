// lib/screens/quran_reader_screen.dart

import 'package:flutter/material.dart';
import '../models/verse_detail.dart';
import '../services/quran_api_service.dart';

class QuranReaderScreen extends StatefulWidget {
  final int surahId;
  final String surahNameLatin;
  final String surahNameArabic;
  final int totalVerses;

  const QuranReaderScreen({
    Key? key,
    this.surahId = 8, // Default Surah Al-Anfal (ada Jejak Sejarah Badar)
    this.surahNameLatin = 'Al-Anfal',
    this.surahNameArabic = 'الأنفال',
    this.totalVerses = 75,
  }) : super(key: key);

  @override
  State<QuranReaderScreen> createState() => _QuranReaderScreenState();
}

class _QuranReaderScreenState extends State<QuranReaderScreen> {
  final QuranApiService _apiService = QuranApiService();
  
  // Real-time text settings
  double _arabicFontSize = 32.0;
  double _translationFontSize = 15.0;
  bool _showTranslation = true;
  bool _showTransliteration = false;

  // Selected Qori & Playback state
  String _selectedReciter = "Mishary Rashid Al-Afasy";
  int? _activePlayingVerse;
  bool _isPlaying = false;

  // Cache data ayat
  final Map<int, VerseDetailData> _verseDataCache = {};
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadInitialVerses();
  }

  Future<void> _loadInitialVerses() async {
    setState(() => _isLoading = true);
    // Muat beberapa ayat awal (contoh: ayat 1, 9, 17 untuk Al-Anfal)
    final versesToLoad = [1, 9, 17];
    for (var v in versesToLoad) {
      final res = await _apiService.fetchVerseDetails(widget.surahId, v);
      _verseDataCache[v] = res.data;
    }
    setState(() => _isLoading = false);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0A0F1E), // Deep Midnight
      appBar: _buildAppBar(),
      body: _isLoading
          ? const Center(
              child: CircularProgressIndicator(
                valueColor: AlwaysStoppedAnimation<Color>(Color(0xFFC9A227)),
              ),
            )
          : Column(
              children: [
                _buildSurahHeaderBanner(),
                Expanded(
                  child: ListView.separated(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                    itemCount: _verseDataCache.length,
                    separatorBuilder: (context, index) => const SizedBox(height: 14),
                    itemBuilder: (context, index) {
                      final verseNumber = _verseDataCache.keys.elementAt(index);
                      final verseData = _verseDataCache[verseNumber]!;
                      return _buildVerseCard(verseData);
                    },
                  ),
                ),
                if (_isPlaying) _buildBottomAudioBar(),
              ],
            ),
    );
  }

  PreferredSizeWidget _buildAppBar() {
    return AppBar(
      backgroundColor: const Color(0xFF0F1629),
      elevation: 0,
      title: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            widget.surahNameLatin,
            style: const TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.bold,
              fontSize: 18,
            ),
          ),
          Text(
            '${widget.totalVerses} Ayat • Rasm Uthmani',
            style: const TextStyle(color: Color(0xFF9BA3C5), fontSize: 12),
          ),
        ],
      ),
      actions: [
        IconButton(
          icon: const Icon(Icons.format_size, color: Color(0xFFC9A227)),
          tooltip: 'Pengaturan Ukuran Huruf',
          onPressed: _showFontSizeDialog,
        ),
        IconButton(
          icon: const Icon(Icons.record_voice_over, color: Colors.white70),
          tooltip: 'Pilih Qori',
          onPressed: _showQoriSelectionSheet,
        ),
      ],
    );
  }

  Widget _buildSurahHeaderBanner() {
    return Container(
      width: double.infinity,
      margin: const EdgeInsets.fromLTRB(16, 12, 16, 8),
      padding: const EdgeInsets.symmetric(vertical: 18, horizontal: 20),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [Color(0xFF141C35), Color(0xFF1B2447)],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0x33C9A227), width: 1),
      ),
      child: Column(
        children: [
          Text(
            widget.surahNameArabic,
            style: const TextStyle(
              fontFamily: 'UthmanicHafs',
              fontSize: 34,
              color: Color(0xFFF4D03F),
              height: 1.4,
            ),
            textDirection: TextDirection.rtl,
          ),
          const SizedBox(height: 6),
          const Text(
            'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ',
            style: TextStyle(
              fontFamily: 'UthmanicHafs',
              fontSize: 22,
              color: Color(0xFFC9A227),
              height: 2.0,
            ),
            textDirection: TextDirection.rtl,
          ),
        ],
      ),
    );
  }

  Widget _buildVerseCard(VerseDetailData data) {
    final bool hasHistory = data.historicalContext.hasHistoricalLink;
    final bool isThisPlaying = _activePlayingVerse == data.verse.number && _isPlaying;

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: isThisPlaying ? const Color(0xFF1A2345) : const Color(0xFF141C35),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: isThisPlaying
              ? const Color(0xFFC9A227)
              : hasHistory
                  ? const Color(0x44C9A227)
                  : const Color(0x1AFFFFFF),
          width: isThisPlaying ? 1.5 : 1,
        ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Header Ayat: Nomor & Tombol Aksi
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                width: 36,
                height: 36,
                alignment: Alignment.center,
                decoration: const BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: LinearGradient(
                    colors: [Color(0xFFF4D03F), Color(0xFFC9A227)],
                  ),
                ),
                child: Text(
                  '${data.verse.number}',
                  style: const TextStyle(
                    color: Colors.black,
                    fontWeight: FontWeight.bold,
                    fontSize: 14,
                  ),
                ),
              ),
              Row(
                children: [
                  // TOMBOL PINTAS: JEJAK SEJARAH (Fitur Unik)
                  if (hasHistory)
                    InkWell(
                      onTap: () => _showHistoryDetailModal(data),
                      borderRadius: BorderRadius.circular(20),
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        margin: const EdgeInsets.only(right: 8),
                        decoration: BoxDecoration(
                          color: const Color(0x26C9A227),
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(color: const Color(0xFFC9A227)),
                        ),
                        child: const Row(
                          children: [
                            Text('🏛️', style: TextStyle(fontSize: 13)),
                            SizedBox(width: 4),
                            Text(
                              'Jejak Sejarah',
                              style: TextStyle(
                                color: Color(0xFFF4D03F),
                                fontSize: 11,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),

                  // Tombol Play Audio
                  IconButton(
                    icon: Icon(
                      isThisPlaying ? Icons.pause_circle_filled : Icons.play_circle_fill,
                      color: const Color(0xFF2ECC71),
                      size: 28,
                    ),
                    onPressed: () => _togglePlayVerse(data.verse.number),
                  ),

                  // Bookmark
                  IconButton(
                    icon: const Icon(Icons.bookmark_outline, color: Color(0xFF9BA3C5), size: 22),
                    onPressed: () {
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(content: Text('Ayat ${data.verse.number} ditambahkan ke bookmark')),
                      );
                    },
                  ),
                ],
              ),
            ],
          ),
          const SizedBox(height: 16),

          // Teks Arab Rasm Uthmani (Kaidah Longgar line-height agar harakat tidak bertabrakan)
          Text(
            data.verse.textUthmani,
            textAlign: TextAlign.right,
            textDirection: TextDirection.rtl,
            style: TextStyle(
              fontFamily: 'UthmanicHafs',
              fontSize: _arabicFontSize,
              color: const Color(0xFFF0F4FF),
              height: 2.3, // Standar longgar pencegah tabrakan harakat
              letterSpacing: 0.5,
            ),
          ),

          if (_showTransliteration && data.verse.textLatin.isNotEmpty) ...[
            const SizedBox(height: 12),
            Text(
              data.verse.textLatin,
              style: const TextStyle(
                color: Color(0xFF3498DB),
                fontSize: 13,
                fontStyle: FontStyle.italic,
              ),
            ),
          ],

          if (_showTranslation && data.translations.isNotEmpty) ...[
            const SizedBox(height: 12),
            const Divider(color: Color(0x1AFFFFFF)),
            const SizedBox(height: 8),
            Text(
              data.translations.first.text,
              style: TextStyle(
                color: const Color(0xFFB0B9D6),
                fontSize: _translationFontSize,
                height: 1.6,
              ),
            ),
          ],
        ],
      ),
    );
  }

  // DIALOG: Pengaturan Ukuran Huruf (Font Slider Real-time)
  void _showFontSizeDialog() {
    showModalBottomSheet(
      context: context,
      backgroundColor: const Color(0xFF0F1629),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (context) {
        return StatefulBuilder(
          builder: (context, setModalState) {
            return Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 20),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Kenyamanan Membaca (Rasm Uthmani)',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 20),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text('Ukuran Teks Arab:', style: TextStyle(color: Color(0xFF9BA3C5))),
                      Text('${_arabicFontSize.toInt()} pt',
                          style: const TextStyle(color: Color(0xFFF4D03F), fontWeight: FontWeight.bold)),
                    ],
                  ),
                  Slider(
                    value: _arabicFontSize,
                    min: 24.0,
                    max: 48.0,
                    divisions: 12,
                    activeColor: const Color(0xFFC9A227),
                    inactiveColor: const Color(0x33FFFFFF),
                    onChanged: (val) {
                      setModalState(() => _arabicFontSize = val);
                      setState(() => _arabicFontSize = val);
                    },
                  ),
                  const SizedBox(height: 10),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text('Ukuran Terjemahan:', style: TextStyle(color: Color(0xFF9BA3C5))),
                      Text('${_translationFontSize.toInt()} pt',
                          style: const TextStyle(color: Color(0xFFF4D03F), fontWeight: FontWeight.bold)),
                    ],
                  ),
                  Slider(
                    value: _translationFontSize,
                    min: 12.0,
                    max: 22.0,
                    divisions: 10,
                    activeColor: const Color(0xFF3498DB),
                    inactiveColor: const Color(0x33FFFFFF),
                    onChanged: (val) {
                      setModalState(() => _translationFontSize = val);
                      setState(() => _translationFontSize = val);
                    },
                  ),
                ],
              ),
            );
          },
        );
      },
    );
  }

  // MODAL: Jejak Sejarah dalam Ayat
  void _showHistoryDetailModal(VerseDetailData data) {
    final link = data.historicalContext.links.first;
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF0F1629),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (context) {
        return DraggableScrollableSheet(
          initialChildSize: 0.65,
          maxChildSize: 0.9,
          minChildSize: 0.4,
          expand: false,
          builder: (context, scrollController) {
            return Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
              child: ListView(
                controller: scrollController,
                children: [
                  Center(
                    child: Container(
                      width: 48,
                      height: 4,
                      decoration: BoxDecoration(
                        color: Colors.white24,
                        borderRadius: BorderRadius.circular(2),
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: const Color(0x33C9A227),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Text(
                      '${link.era} • ${link.dateHijri} (${link.dateGregorian})',
                      style: const TextStyle(color: Color(0xFFF4D03F), fontSize: 12, fontWeight: FontWeight.bold),
                    ),
                  ),
                  const SizedBox(height: 12),
                  Text(
                    link.eventTitle,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 14),
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: const Color(0xFF141C35),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: const Color(0x33C9A227)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        const Text(
                          'Kaitan Ayat & Asbabun Nuzul:',
                          style: TextStyle(color: Color(0xFFC9A227), fontWeight: FontWeight.bold, fontSize: 13),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          link.contextExplanation,
                          style: const TextStyle(color: Color(0xFFDCE2F0), height: 1.6, fontSize: 14),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 14),
                  const Text('Tokoh Terkait:', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 8),
                  Wrap(
                    spacing: 8,
                    children: link.keyFigures.map((f) => Chip(
                      backgroundColor: const Color(0xFF1A2345),
                      label: Text(f, style: const TextStyle(color: Colors.white, fontSize: 12)),
                    )).toList(),
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'Sumber Otentik: ${link.authenticSource}',
                    style: const TextStyle(color: Color(0xFF7A86B6), fontSize: 11, fontStyle: FontStyle.italic),
                  ),
                ],
              ),
            );
          },
        );
      },
    );
  }

  void _showQoriSelectionSheet() {
    final qoris = [
      {"name": "Mishary Rashid Al-Afasy", "type": "Murattal • Kuwait 🇰🇼"},
      {"name": "Abdul Basit Abdus Samad", "type": "Mujawwad • Mesir 🇪🇬"},
      {"name": "Muammar ZA", "type": "Murattal • Indonesia 🇮🇩"},
      {"name": "Muzammil Hasballah", "type": "Murattal • Indonesia 🇮🇩"},
    ];

    showModalBottomSheet(
      context: context,
      backgroundColor: const Color(0xFF0F1629),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (context) {
        return ListView.builder(
          shrinkWrap: true,
          itemCount: qoris.length,
          itemBuilder: (context, i) {
            final q = qoris[i];
            final selected = q['name'] == _selectedReciter;
            return ListTile(
              leading: Icon(Icons.mic, color: selected ? const Color(0xFFC9A227) : Colors.white54),
              title: Text(q['name']!, style: TextStyle(color: selected ? const Color(0xFFF4D03F) : Colors.white)),
              subtitle: Text(q['type']!, style: const TextStyle(color: Color(0xFF9BA3C5), fontSize: 12)),
              trailing: selected ? const Icon(Icons.check, color: Color(0xFFC9A227)) : null,
              onTap: () {
                setState(() => _selectedReciter = q['name']!);
                Navigator.pop(context);
              },
            );
          },
        );
      },
    );
  }

  void _togglePlayVerse(int verseNumber) {
    setState(() {
      if (_activePlayingVerse == verseNumber && _isPlaying) {
        _isPlaying = false;
      } else {
        _activePlayingVerse = verseNumber;
        _isPlaying = true;
      }
    });
  }

  Widget _buildBottomAudioBar() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
      decoration: const BoxDecoration(
        color: Color(0xFF0F1629),
        border: Border(top: BorderSide(color: Color(0x33C9A227), width: 1)),
      ),
      child: Row(
        children: [
          const Icon(Icons.music_note, color: Color(0xFFF4D03F)),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  'Ayat $_activePlayingVerse • ${_selectedReciter}',
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 13),
                ),
                const Text(
                  'Streaming Audio CDN (Cloudflare R2)',
                  style: TextStyle(color: Color(0xFF9BA3C5), fontSize: 11),
                ),
              ],
            ),
          ),
          IconButton(
            icon: const Icon(Icons.pause, color: Colors.white),
            onPressed: () => setState(() => _isPlaying = false),
          ),
          IconButton(
            icon: const Icon(Icons.close, color: Colors.white54, size: 20),
            onPressed: () => setState(() {
              _isPlaying = false;
              _activePlayingVerse = null;
            }),
          ),
        ],
      ),
    );
  }
}
