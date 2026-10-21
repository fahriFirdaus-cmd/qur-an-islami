// lib/services/quran_api_service.dart

import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/verse_detail.dart';

class QuranApiService {
  // Base URL konfigurasi (sesuaikan dengan IP lokal / cloud gateway)
  static const String baseUrl = 'http://10.0.2.2:5000/api/v1'; // 10.0.2.2 untuk Android Emulator

  final http.Client _client;

  QuranApiService({http.Client? client}) : _client = client ?? http.Client();

  /// Mengambil detail ayat lengkap: Teks Rasm Uthmani, Terjemahan, Audio CDN, dan Jejak Sejarah
  Future<VerseDetailResponse> fetchVerseDetails(int surahId, int verseNumber) async {
    final uri = Uri.parse('$baseUrl/verses/$surahId/$verseNumber/details');

    try {
      final response = await _client.get(
        uri,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      ).timeout(const Duration(seconds: 10));

      if (response.statusCode == 200) {
        final decoded = json.decode(utf8.decode(response.bodyBytes));
        return VerseDetailResponse.fromJson(decoded);
      } else {
        throw Exception('Gagal memuat ayat: Status code ${response.statusCode}');
      }
    } catch (e) {
      // Fallback lokal jika offline / development tanpa server berjalan
      return _generateOfflineFallback(surahId, verseNumber);
    }
  }

  /// Mengambil daftar semua surah
  Future<List<dynamic>> fetchSurahs() async {
    final uri = Uri.parse('$baseUrl/surahs');
    try {
      final response = await _client.get(uri).timeout(const Duration(seconds: 10));
      if (response.statusCode == 200) {
        final decoded = json.decode(utf8.decode(response.bodyBytes));
        return decoded['data'] ?? [];
      }
    } catch (_) {}
    return [];
  }

  /// Offline Fallback Generator
  VerseDetailResponse _generateOfflineFallback(int surahId, int verseNumber) {
    return VerseDetailResponse(
      success: true,
      data: VerseDetailData(
        surah: SurahInfo(
          id: surahId,
          nameLatin: surahId == 8 ? "Al-Anfal" : "Al-Fatihah",
          nameArabic: surahId == 8 ? "الأنفال" : "الفاتحة",
          revelationType: surahId == 8 ? "Madaniyah" : "Makkiyah",
          totalVerses: surahId == 8 ? 75 : 7,
        ),
        verse: VerseInfo(
          number: verseNumber,
          juz: 1,
          page: 1,
          textUthmani: surahId == 8 && verseNumber == 17
              ? "فَلَمْ تَقْتُلُوْهُمْ وَلٰكِنَّ اللّٰهَ قَتَلَهُمْۖ وَمَا رَمَيْتَ اِذْ رَمَيْتَ وَلٰكِنَّ اللّٰهَ رَمٰىۚ"
              : "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",
          textLatin: "Bismillāhir-raḥmānir-raḥīm",
          fontRecommended: "UthmanicHafs",
        ),
        translations: [
          TranslationInfo(
            language: "id",
            source: "Kemenag RI",
            text: surahId == 8 && verseNumber == 17
                ? "Maka (sebenarnya) bukan kamu yang membunuh mereka, melainkan Allah-lah yang membunuh mereka..."
                : "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.",
          )
        ],
        audioStreams: [
          AudioStreamInfo(
            reciterId: "mishary_alafasy",
            reciterName: "Mishary Rashid Al-Afasy",
            country: "Kuwait 🇰🇼",
            style: "Murattal",
            category: "Internasional",
            audioUrl: "https://cdn.quran-peradaban.id/audio/1/001001.mp3",
            bitrate: "128kbps",
          ),
          AudioStreamInfo(
            reciterId: "muammar_za",
            reciterName: "Muammar ZA",
            country: "Indonesia 🇮🇩",
            style: "Murattal",
            category: "Nusantara",
            audioUrl: "https://cdn.quran-peradaban.id/audio/4/001001.mp3",
            bitrate: "128kbps",
          ),
        ],
        historicalContext: HistoricalContext(
          hasHistoricalLink: surahId == 8 && verseNumber == 17,
          totalLinks: surahId == 8 && verseNumber == 17 ? 1 : 0,
          links: surahId == 8 && verseNumber == 17
              ? [
                  HistoricalLinkItem(
                    eventId: "perang_badar",
                    eventTitle: "Perang Badar Al-Kubra",
                    era: "Era Kenabian (Madinah)",
                    dateHijri: "17 Ramadhan 2 H",
                    dateGregorian: "13 Maret 624 M",
                    linkType: "asbabun_nuzul",
                    contextExplanation: "Ayat ini diturunkan saat Nabi Muhammad ﷺ mengambil segenggam debu di medan Badar dan melemparkannya ke arah pasukan Quraisy...",
                    keyFigures: ["Nabi Muhammad ﷺ", "Ali bin Abi Thalib"],
                    authenticSource: "Shahih Bukhari no. 3953",
                  )
                ]
              : [],
        ),
      ),
    );
  }
}
